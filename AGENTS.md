# Project rules
- Keep the pack presentation and its carousel in independent components so section-specific changes do not affect the rest of the landing.
- Store carousel image metadata in an editable data module and uploaded media in CDN asset pointers so original files remain organized without bloating the repository.
- Use the already-installed Embla library for carousel gestures and looping rather than adding another dependency.