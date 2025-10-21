# Repository Guidelines

Welcome to the Taverna Aventurilor Foundry VTT module. Follow these notes to keep content predictable, compatible with Foundry 13, and easy for game masters to deploy.

## Project Structure & Module Organization
- `module.json` stores manifest metadata; update `version`, `compatibility`, and pack listings when adding content.
- `assets/` holds player-facing media; subfolders such as `assets/Random Encounter Maps` and `assets/World Map Icons` mirror how scenes reference files, so reuse those paths when adding art.
- `background/` contains login splash imagery; keep dimensions consistent with `background/Server_connect.webp`.
- `packs/starter/` is the adventure compendium (LevelDB). Use Foundry’s Compendium tools to export/import rather than editing these files directly.

## Build, Test, and Development Commands
- `jq . module.json` quickly validates manifest syntax before distributing updates.
- `zip -r dist/taverna-aventurilor-wm.zip module.json assets background packs` packages the module for upload; ensure `dist/` exists beforehand.
- `ln -s $(pwd) ~/FoundryVTT/Data/modules/taverna-aventurilor-wm` links the repo into a local Foundry data path for live testing.

## Coding Style & Naming Conventions
- Keep JSON and configuration files indented with two spaces and UTF-8 encoded ASCII filenames.
- Use lowercase-kebab-case for new directory names; reserve spaces or Title Case only when matching existing asset paths referenced in scenes.
- Prefer webp or optimized png for imagery; keep filenames descriptive of their in-game usage.

## Testing Guidelines
- After changes, launch Foundry 13, enable the module, and open each Scene, Actor, Journal, and Handout from `Starter` to confirm assets resolve.
- Verify new media loads by toggling GM/Player view and checking the console for missing file warnings.
- Document manual test notes in the pull request when adding new narrative content or maps.

## Commit & Pull Request Guidelines
- Write concise, imperative commits (e.g., `add tavern scene handouts`); scope lines to 72 characters and group related asset drops into one commit.
- Bump `module.json` `version` when the content changes for release, and mention the new version in the PR description.
- PRs should summarize gameplay impact, list updated asset paths, link any tracking issues, and attach Foundry screenshots when visual content is added.

## Release & Distribution Tips
- Before tagging a release, verify the zipped package installs cleanly in a fresh Foundry data directory and that the compendium opens without migration prompts.
- Update any external catalog entries (website, manifest URL) to point at the new `module.json` version and checksum.
