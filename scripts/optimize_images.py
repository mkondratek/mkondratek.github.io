#!/usr/bin/env python3
"""
Image optimization script for web deployment
Resizes and compresses images to reduce file size while maintaining quality
"""

import os
import sys
from PIL import Image, ExifTags
import argparse

def get_image_orientation(image_path):
    """Get the correct orientation of an image from EXIF data"""
    try:
        image = Image.open(image_path)
        for orientation in ExifTags.TAGS.keys():
            if ExifTags.TAGS[orientation] == 'Orientation':
                break
        
        if hasattr(image, '_getexif'):
            exif = image._getexif()
            if exif is not None:
                orientation_value = exif.get(orientation)
                return orientation_value
    except:
        pass
    return 1

def rotate_image_by_exif(image, image_path):
    """Rotate image based on EXIF orientation data"""
    orientation = get_image_orientation(image_path)
    
    if orientation == 3:
        image = image.rotate(180, expand=True)
    elif orientation == 6:
        image = image.rotate(270, expand=True)
    elif orientation == 8:
        image = image.rotate(90, expand=True)
    
    return image

def optimize_image(input_path, output_path, max_width=800, quality=85):
    """
    Optimize a single image by resizing and compressing
    
    Args:
        input_path: Path to original image
        output_path: Path to save optimized image
        max_width: Maximum width in pixels (default: 800)
        quality: JPEG quality 1-100 (default: 85)
    """
    try:
        # Open and correct orientation
        with Image.open(input_path) as img:
            img = rotate_image_by_exif(img, input_path)
            
            # Convert to RGB if necessary (for JPEG output)
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')
            
            # Calculate new dimensions maintaining aspect ratio
            width, height = img.size
            if width > max_width:
                new_width = max_width
                new_height = int((height * max_width) / width)
                img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            
            # Save optimized image
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            
            # Get file sizes
            original_size = os.path.getsize(input_path)
            optimized_size = os.path.getsize(output_path)
            savings = ((original_size - optimized_size) / original_size) * 100
            
            print(f"✓ {os.path.basename(input_path)} -> {os.path.basename(output_path)}")
            print(f"  {original_size/1024/1024:.1f}MB -> {optimized_size/1024/1024:.1f}MB ({savings:.1f}% smaller)")
            
            return True
            
    except Exception as e:
        print(f"✗ Error processing {input_path}: {e}")
        return False

def process_directory(input_dir, output_dir, max_width=800, quality=85):
    """
    Process all images in a directory
    
    Args:
        input_dir: Directory containing original images
        output_dir: Directory to save optimized images
        max_width: Maximum width in pixels
        quality: JPEG quality 1-100
    """
    if not os.path.exists(input_dir):
        print(f"Error: Input directory {input_dir} does not exist")
        return
    
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Get list of image files
    image_extensions = {'.jpg', '.jpeg', '.png', '.tiff', '.bmp'}
    image_files = [
        f for f in os.listdir(input_dir) 
        if os.path.splitext(f.lower())[1] in image_extensions
    ]
    
    if not image_files:
        print(f"No image files found in {input_dir}")
        return
    
    print(f"Processing {len(image_files)} images from {input_dir}")
    print(f"Max width: {max_width}px, Quality: {quality}%")
    print("-" * 50)
    
    total_original = 0
    total_optimized = 0
    success_count = 0
    
    for filename in sorted(image_files):
        input_path = os.path.join(input_dir, filename)
        # Change extension to .jpg for consistency
        name_without_ext = os.path.splitext(filename)[0]
        output_filename = f"{name_without_ext}.jpg"
        output_path = os.path.join(output_dir, output_filename)
        
        if optimize_image(input_path, output_path, max_width, quality):
            total_original += os.path.getsize(input_path)
            total_optimized += os.path.getsize(output_path)
            success_count += 1
    
    print("-" * 50)
    print(f"Processed: {success_count}/{len(image_files)} images")
    if total_original > 0:
        total_savings = ((total_original - total_optimized) / total_original) * 100
        print(f"Total size: {total_original/1024/1024:.1f}MB -> {total_optimized/1024/1024:.1f}MB")
        print(f"Total savings: {total_savings:.1f}%")

def main():
    parser = argparse.ArgumentParser(description='Optimize images for web deployment')
    parser.add_argument('input_dir', help='Directory containing original images')
    parser.add_argument('output_dir', help='Directory to save optimized images')
    parser.add_argument('--width', type=int, default=800, help='Maximum width in pixels (default: 800)')
    parser.add_argument('--quality', type=int, default=85, help='JPEG quality 1-100 (default: 85)')
    
    args = parser.parse_args()
    
    if args.quality < 1 or args.quality > 100:
        print("Error: Quality must be between 1 and 100")
        sys.exit(1)
    
    if args.width < 100:
        print("Error: Width must be at least 100 pixels")
        sys.exit(1)
    
    process_directory(args.input_dir, args.output_dir, args.width, args.quality)

if __name__ == '__main__':
    main()
