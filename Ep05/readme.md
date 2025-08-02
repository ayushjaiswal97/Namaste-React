# Namaste React

# Parcel
- Dev Build
- Local Server
- HMR(refreshing) = Hot Module Replacement
- File Watching - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress files
- Consistent Hashing
- Code Spliting
- Different Bundling
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking Algorithm - remove usused code
- Different dev and prod. bundlers

- React.createElement => Object => HTML (render)(Browser Understands)

- JSX (transpiled before it reaches the JS Engine) - Pracel (transpiled by Pracel) - Babel - (is transpiled  quickly transpiled our code it takes conert your jsx code into react code).
- JSX (HTML or XML like syntax) => React.createElement => Object => HTML (Browser Understands)
- JSX => Babel Transpiles it to React.createElement => ReactElement-JS Object => HTML (render)-(Browser Understands)

- MultiLine JSX - wrap with ()

-- Components (2 - types)
// class Based Components
// Functional Components

// Day - 4 
/**
 * Header
 * -LOGO
 * -Nav-links
 * Body
 * -Search
 * -Restautrant Container
 * --Restaurant Card
 * ---Img
 * ---Name of res, star rating, cuisine, delvery time
 * Footer
 * -Links
 * -Contact
 * -Address
 */

 // Not using keys (not acceptable) <<<< index as key <<<<<<< unique id (best practice)