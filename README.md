# Optimization of Next.js app

## Image Optimization:

1. Using Image component provided by next.js. (<Image />)

2. Automatically optimize the size of the image.

3. Prevents layout shifts when images are loading or completed loading.

4. Speeds page load time. Images are only loaded when they are visible or when image is in viewport.

5. Automatocally determines the width and height of the image, so d ifferent images are servered based on the screen resolution of the device, this is dynamically done by the Next.js.

6. We can manually set height and width of the image, using "width" and "height" props : IMP : Not recommended

7. We can use sizes props. This prop takes list of different sizes, the image should assume depending on the width of the viewport.

8. Priority prop : tell next.js that this image always needs to be loaded. So when navigating to a page next.js will preload the image and lazy loading will be disabled, so the browser does not need to check if the image should be loaded or not, insead it will always be loaded.

fetchpriority="high" will be added to image element.

9. If we set width and height prop on the Image component, we can pass string to the "src" prop of the Image component. It is a work around and not recommended.

10. Instead we should use "fill" prop, When ever we are loading an image from an external site, Next.js for security reasons, block that image, and gives us an error.

We can remove this error by adding setting in next.config file.

const nextConfig = {
images: {
remotePatterns: [{ hostname: "res.cloudinary.com" }],
},
};
