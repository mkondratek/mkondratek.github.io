// Family tree using Cytoscape.js
// Convert family data to Cytoscape format (nodes and edges)

const familyData = {
    // Nodes (people)
    nodes: [
        // Great-grandparents (with preset positions)
        { data: { id: 'gg_ff_m', label: 'Pradziadek\n[Imię]', generation: 0, side: 'paternal' }, position: { x: 0, y: 0 } },
        { data: { id: 'gg_ff_f', label: 'Prababcia\n[Imię]', generation: 0, side: 'paternal' }, position: { x: 120, y: 0 } },
        { data: { id: 'gg_fm_m', label: 'Pradziadek\n[Imię]', generation: 0, side: 'paternal' }, position: { x: 300, y: 0 } },
        { data: { id: 'gg_fm_f', label: 'Prababcia\n[Imię]', generation: 0, side: 'paternal' }, position: { x: 420, y: 0 } },
        { data: { id: 'gg_mf_m', label: 'Pradziadek\nWładysław', generation: 0, side: 'maternal' }, position: { x: 600, y: 0 } },
        { data: { id: 'gg_mf_f', label: 'Prababcia\nIrena', generation: 0, side: 'maternal' }, position: { x: 720, y: 0 } },
        { data: { id: 'gg_mm_m', label: 'Pradziadek\n[Imię]', generation: 0, side: 'maternal' }, position: { x: 900, y: 0 } },
        { data: { id: 'gg_mm_f', label: 'Prababcia\n[Imię]', generation: 0, side: 'maternal' }, position: { x: 1020, y: 0 } },
        
        // Grandparents
        { data: { id: 'gp_f', label: 'Jan Kondratek', generation: 1, side: 'paternal', role: 'grandparent' }, position: { x: 150, y: 150 } },
        { data: { id: 'gp_fm', label: 'Joanna Kondratek', generation: 1, side: 'paternal', role: 'grandparent' }, position: { x: 270, y: 150 } },
        { data: { id: 'gp_m', label: 'Jarosław Cuper', generation: 1, side: 'maternal', role: 'grandparent' }, position: { x: 650, y: 150 } },
        { data: { id: 'gp_mm', label: 'Beata Cuper', generation: 1, side: 'maternal', role: 'grandparent' }, position: { x: 770, y: 150 } },
        
        // Parents generation
        { data: { id: 'father_s1', label: 'Kacper Dionizy\nKondratek', generation: 2, side: 'paternal', role: 'aunt-uncle' }, position: { x: 50, y: 300 } },
        { data: { id: 'father_s2', label: 'Hubert Maurycy\nKondratek', generation: 2, side: 'paternal', role: 'aunt-uncle' }, position: { x: 170, y: 300 } },
        { data: { id: 'father', label: 'Mikołaj Gustaw\nKondratek', generation: 2, side: 'paternal', role: 'parent', isMainParent: true }, position: { x: 290, y: 300 } },
        { data: { id: 'mother', label: 'Katarzyna Aleksandra\nKondratek', generation: 2, side: 'maternal', role: 'parent', isMainParent: true }, position: { x: 410, y: 300 } },
        { data: { id: 'mother_s1', label: 'Szymon\nCuper', generation: 2, side: 'maternal', role: 'aunt-uncle' }, position: { x: 530, y: 300 } },
        
        // Family unit nodes (invisible connection points positioned between couples)
        { data: { id: 'family_gg_ff', label: '', generation: 0, role: 'family-unit' }, position: { x: 60, y: 0 } },
        { data: { id: 'family_gg_fm', label: '', generation: 0, role: 'family-unit' }, position: { x: 360, y: 0 } },
        { data: { id: 'family_gg_mf', label: '', generation: 0, role: 'family-unit' }, position: { x: 660, y: 0 } },
        { data: { id: 'family_gg_mm', label: '', generation: 0, role: 'family-unit' }, position: { x: 960, y: 0 } },
        { data: { id: 'family_gp_f', label: '', generation: 1, role: 'family-unit' }, position: { x: 210, y: 150 } },
        { data: { id: 'family_gp_m', label: '', generation: 1, role: 'family-unit' }, position: { x: 710, y: 150 } },
        { data: { id: 'family_parents', label: '', generation: 2, role: 'family-unit' }, position: { x: 350, y: 300 } },
        
        // Children
        { data: { id: 'jozef', label: 'Józef Jan\nKondratek\n\nur. 13.XII.2024\nchrz. 15.VIII.2025', generation: 3, role: 'main-child', isMainChild: true }, position: { x: 350, y: 450 } }
    ],
    
    // Edges (relationships)
    edges: [
        // Parents to family units (marriages)
        { data: { id: 'marriage1', source: 'gg_ff_m', target: 'family_gg_ff', type: 'marriage' } },
        { data: { id: 'marriage2', source: 'gg_ff_f', target: 'family_gg_ff', type: 'marriage' } },
        { data: { id: 'marriage3', source: 'gg_fm_m', target: 'family_gg_fm', type: 'marriage' } },
        { data: { id: 'marriage4', source: 'gg_fm_f', target: 'family_gg_fm', type: 'marriage' } },
        { data: { id: 'marriage5', source: 'gg_mf_m', target: 'family_gg_mf', type: 'marriage' } },
        { data: { id: 'marriage6', source: 'gg_mf_f', target: 'family_gg_mf', type: 'marriage' } },
        { data: { id: 'marriage7', source: 'gg_mm_m', target: 'family_gg_mm', type: 'marriage' } },
        { data: { id: 'marriage8', source: 'gg_mm_f', target: 'family_gg_mm', type: 'marriage' } },
        
        { data: { id: 'marriage9', source: 'gp_f', target: 'family_gp_f', type: 'marriage' } },
        { data: { id: 'marriage10', source: 'gp_fm', target: 'family_gp_f', type: 'marriage' } },
        { data: { id: 'marriage11', source: 'gp_m', target: 'family_gp_m', type: 'marriage' } },
        { data: { id: 'marriage12', source: 'gp_mm', target: 'family_gp_m', type: 'marriage' } },
        
        { data: { id: 'marriage13', source: 'father', target: 'family_parents', type: 'marriage' } },
        { data: { id: 'marriage14', source: 'mother', target: 'family_parents', type: 'marriage' } },
        
        // Family units to children (single clean edges)
        { data: { id: 'family_child1', source: 'family_gg_ff', target: 'gp_f', type: 'family-child' } },
        { data: { id: 'family_child2', source: 'family_gg_fm', target: 'gp_fm', type: 'family-child' } },
        { data: { id: 'family_child3', source: 'family_gg_mf', target: 'gp_m', type: 'family-child' } },
        { data: { id: 'family_child4', source: 'family_gg_mm', target: 'gp_mm', type: 'family-child' } },
        
        { data: { id: 'family_child5', source: 'family_gp_f', target: 'father', type: 'family-child' } },
        { data: { id: 'family_child6', source: 'family_gp_f', target: 'father_s1', type: 'family-child' } },
        { data: { id: 'family_child7', source: 'family_gp_f', target: 'father_s2', type: 'family-child' } },
        { data: { id: 'family_child8', source: 'family_gp_m', target: 'mother', type: 'family-child' } },
        { data: { id: 'family_child9', source: 'family_gp_m', target: 'mother_s1', type: 'family-child' } },
        
        { data: { id: 'family_child10', source: 'family_parents', target: 'jozef', type: 'family-child' } },
        
        // Sibling relationships (dotted connections)
        { data: { id: 'sibling1', source: 'father', target: 'father_s1', type: 'sibling' } },
        { data: { id: 'sibling2', source: 'father_s1', target: 'father_s2', type: 'sibling' } },
        { data: { id: 'sibling3', source: 'mother', target: 'mother_s1', type: 'sibling' } }
    ]
};

// Cytoscape styles
const cytoscapeStyles = [
    // Node styles by role
    {
        selector: 'node[role="main-child"]',
        style: {
            'background-color': '#4caf50',
            'border-width': 4,
            'border-color': '#2e7d32',
            'label': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '12px',
            'font-weight': 'bold',
            'color': '#1b5e20',
            'text-wrap': 'wrap',
            'text-max-width': '80px',
            'width': 120,
            'height': 80,
            'shape': 'round-rectangle'
        }
    },
    {
        selector: 'node[role="parent"]',
        style: {
            'background-color': '#2196f3',
            'border-width': 3,
            'border-color': '#1565c0',
            'label': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '10px',
            'font-weight': 'bold',
            'color': '#0d47a1',
            'text-wrap': 'wrap',
            'text-max-width': '70px',
            'width': 100,
            'height': 60,
            'shape': 'round-rectangle'
        }
    },
    {
        selector: 'node[role="grandparent"]',
        style: {
            'background-color': '#ff9800',
            'border-width': 2,
            'border-color': '#ef6c00',
            'label': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '9px',
            'color': '#e65100',
            'text-wrap': 'wrap',
            'text-max-width': '60px',
            'width': 90,
            'height': 50,
            'shape': 'round-rectangle'
        }
    },
    {
        selector: 'node[role="aunt-uncle"]',
        style: {
            'background-color': '#9c27b0',
            'border-width': 2,
            'border-color': '#6a1b9a',
            'label': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '9px',
            'color': '#4a148c',
            'text-wrap': 'wrap',
            'text-max-width': '60px',
            'width': 85,
            'height': 50,
            'shape': 'round-rectangle',
            'opacity': 0.8
        }
    },
    {
        selector: 'node[generation="0"]', // Great-grandparents
        style: {
            'background-color': '#795548',
            'border-width': 2,
            'border-color': '#5d4037',
            'label': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '8px',
            'color': '#3e2723',
            'text-wrap': 'wrap',
            'text-max-width': '50px',
            'width': 80,
            'height': 40,
            'shape': 'round-rectangle',
            'opacity': 0.7
        }
    },
    {
        selector: 'node[role="family-unit"]',
        style: {
            'background-color': 'transparent',
            'border-width': 0,
            'width': 10,
            'height': 10,
            'opacity': 0.3
        }
    },
    
    // Edge styles by type
    {
        selector: 'edge[type="marriage"]',
        style: {
            'line-color': '#e91e63',
            'width': 3,
            'curve-style': 'taxi',
            'taxi-direction': 'horizontal',
            'taxi-turn': 20,
            'taxi-turn-min-distance': 10
        }
    },
    {
        selector: 'edge[type="family-child"]',
        style: {
            'line-color': '#2196f3',
            'width': 2,
            'target-arrow-shape': 'triangle',
            'target-arrow-color': '#2196f3',
            'curve-style': 'taxi',
            'taxi-direction': 'vertical',
            'taxi-turn': 20,
            'taxi-turn-min-distance': 10
        }
    },
    {
        selector: 'edge[type="sibling"]',
        style: {
            'line-color': '#9c27b0',
            'width': 2,
            'line-style': 'dotted',
            'curve-style': 'taxi',
            'taxi-direction': 'horizontal',
            'taxi-turn': 15,
            'taxi-turn-min-distance': 8
        }
    }
];

// Initialize Cytoscape family tree
function initializeFamilyTree() {
    const container = document.getElementById('family-tree');
    if (!container) return;
    
    // Clear existing content
    container.innerHTML = '<h2>Drzewo rodziny Józefa Jana</h2><div id="cy-container"></div>';
    
    // Create Cytoscape container
    const cyContainer = document.getElementById('cy-container');
    cyContainer.style.width = '100%';
    cyContainer.style.height = '600px';
    cyContainer.style.border = '1px solid #ccc';
    cyContainer.style.borderRadius = '8px';
    cyContainer.style.marginTop = '20px';
    
    // Initialize Cytoscape
    const cy = cytoscape({
        container: cyContainer,
        elements: [...familyData.nodes, ...familyData.edges],
        style: cytoscapeStyles,
        layout: {
            name: 'preset'
        },
        minZoom: 0.3,
        maxZoom: 2,
        wheelSensitivity: 0.2,
        autoungrabify: true  // Disable node dragging
    });
    
    // Add interactivity
    cy.on('tap', 'node', function(event) {
        const node = event.target;
        const nodeData = node.data();
        
        // Highlight connected nodes
        cy.elements().removeClass('highlighted faded');
        
        const connected = node.connectedEdges().connectedNodes();
        connected.addClass('highlighted');
        node.addClass('highlighted');
        
        cy.elements().not(connected).not(node).addClass('faded');
        
        // Show node info (could be expanded)
        console.log(`Selected: ${nodeData.label}`);
    });
    
    // Reset highlighting on background tap
    cy.on('tap', function(event) {
        if (event.target === cy) {
            cy.elements().removeClass('highlighted faded');
        }
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializeFamilyTree);
