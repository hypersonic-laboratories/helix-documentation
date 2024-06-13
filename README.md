## Install
1. Install [python 3](https://www.python.org/downloads/)
2. Setup [venv](https://realpython.com/what-is-pip/#using-pip-in-a-python-virtual-environment)
3. Run `pip install mkdocs-material` [^](https://squidfunk.github.io/mkdocs-material/getting-started/)

## Development
1. `mkdocs serve` for local testing at `http://127.0.0.1:8000/`
2. `mkdocs build` for building manually (shouldn't ever be needed)

## Branches
- `development`, viewable at `dev.docs.helixgame.com`
- `production` for the main site at `docs.helixgame.com`. Cannot be pushed to directly.

(Note: We use Cloudflare pages for this [private])