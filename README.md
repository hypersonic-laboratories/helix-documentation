## Developer Setup
1. Install [python 3](https://www.python.org/downloads/) (see 'runtime.txt' for exact version - currently 3.12.4)
- (Optional) Setup [venv](https://realpython.com/what-is-pip/#using-pip-in-a-python-virtual-environment)
2. Run `pip install -r requirements.txt`

## Development
1. `mkdocs serve` for local testing at `http://127.0.0.1:8000/`
2. `mkdocs build` for building manually

## Branches
- `development`, previews viewable at `development.helixdocs-1s1.pages.dev`
- `production` for the main site at `docs.helixgame.com`. Cannot be pushed to directly.

(Hosting via Cloudflare Pages [private])