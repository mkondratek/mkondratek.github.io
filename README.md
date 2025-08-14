# mkondratek.github.io
[Personal website](https://mkondratek.github.io).

## Local Development

For local testing, use a simple HTTP server due to CORS restrictions:

```bash
python3 -m http.server 8000
```

Then visit: `http://localhost:8000`

**Why?** Opening HTML files directly (`file://`) blocks JavaScript from loading JSON files. GitHub Pages works automatically.
