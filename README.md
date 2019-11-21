Experimental. **DO NOT USE.**

## Update

Proceeding to go without a framework.

---

## Limitations

- Automatic namespacing prevents the use of amp-keyframes. Animations will count towards the amp-custom limits.

- Unable to take advantage of React using AMP mode. Unwilling to use Hybrid mode.

- Lack of support: Angular (no AMP options), Next.js (many longstanding issues)

## Alternatives

- No framework

- Inline Vue.js inside an amp-script. (Angular, React, and Preact all can't do this)

- Nuxt.js

## Conclusion

Since Next.js is unable to make use of my existing Sass stylesheets, going without a framework may be the best choice. This way, Vue.js can be inserted in-place later on too. Nuxt.js seems to be too much of a commitment at this point. Feels bad not giving the other frameworks a chance, but this wasn't meant to be so complicated in the first place. The lack of AMP support from the two biggest frameworks is surprising -- may be an indication...
