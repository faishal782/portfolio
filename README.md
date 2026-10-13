# Faishal — Video Editor Portfolio

A responsive portfolio starter built with plain HTML, CSS, and JavaScript. No build step or framework is required.

## Run locally

1. Unzip the project and open the `video-editor-portfolio` folder in VS Code.
2. Open `index.html` in your browser, or use the VS Code Live Server extension for automatic refresh while editing.
3. The Google Fonts, Unsplash demo images, and YouTube sample player need an internet connection. Replace these with your own assets before launch.

## Make it yours

- **Images:** Update the `src` URLs on the image elements in `index.html`. You can use local assets, for example `assets/images/my-film-still.jpg`. The About section uses `assets/images/profile-pic.jpeg`. Write alt text that describes the actual image.
- **Videos:** Replace each `data-video` value with a valid YouTube or Vimeo embed URL. For YouTube, use `https://www.youtube-nocookie.com/embed/VIDEO_ID?autoplay=1`. Local MP4 files can also be placed in `assets/videos/` and referenced with `data-local-video="true"` plus a relative `data-video` path. The Motion Graphics, Reels & Shorts, Podcast, Sports Edit, Business Summit, Tingly, and Astro Facts previews autoplay muted and loop; browser autoplay settings may still prevent playback.
- **Projects:** Duplicate or remove an `<article class="project-card">` in the gallery. Set `data-category` to `youtube`, `sports`, `brand`, `reels`, or `motion` so the filter works. Separate multiple categories with spaces, for example `data-category="brand reels"`, to show one project under more than one filter. Update its title, format, duration, thumbnail, video URL, and accessible description. The Motion Graphics, Reels & Shorts, Podcast, Sports Edit, Business Summit, Tingly, and Astro Facts items use the MP4s provided for this portfolio; the Reels & Shorts, Podcast, Business Summit, Tingly Brand Film, Astro Facts, and Sports Edit items display in 9:16 portrait frames. Tingly is item 06, beside Business Summit at item 05. Astro Facts is item 07.
- **Contact and socials:** The email and LinkedIn profile are set to the details provided for Faishal. Edit the `mailto:` address and LinkedIn URL in `index.html` if either changes. Instagram and YouTube links are omitted until you provide profile URLs.
- **Copy and styling:** Edit the text directly in `index.html`. The color palette and responsive layout are defined near the top of `style.css`.

The contact button uses `mailto:` and opens the visitor's email app. A form that submits messages directly would need a server or form service; this starter does not pretend to provide one.

## Publish online

Upload the project folder to a static hosting service such as GitHub Pages, Netlify, or Cloudflare Pages. For GitHub Pages, push the files to a repository, then enable Pages for the branch and folder containing `index.html`. For Netlify or Cloudflare Pages, connect the repository and publish the project root; no build command is needed.

Before publishing, replace any remaining demo footage and confirm the provided contact details. Make sure you have permission to use every image and video. The gallery still uses remote Unsplash images as sample imagery.
