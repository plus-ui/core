# Alias

Alias Tokens are context-specific and introduce a fresh approach to referring to colors. Instead of merely identifying colors by their visual characteristics, Alias Tokens emphasize the function they serve within the design system. For instance, #2F80ED might be designated as "blue.default," which can then further be assigned different aliases according to their specific applications, akin to characters in a spy thriller. Examples of Alias Tokens include "text.link," "background.button.primary," "border.checkbox.unselected," and "border.radio.selected." These tokens provide crystal-clear guidance on where and how they should be utilized.

You might argue that Alias Tokens don't convey information about the color itself, but does that truly matter? The primary purpose is not to describe colors but to streamline their application. You already know precisely where each Alias Token should be used, and if you ever need to visualize the color, it's readily accessible.

The advantages of Alias Tokens are manifold:

1. **Clarity of Purpose:** Alias Tokens make it explicitly clear what role a token plays in the design system.
2. **Error Prevention:** Like Global Tokens, Alias Tokens are integral to the codebase. Any deviation in spacing or characters is instantly identified as a potential error, preventing coding mishaps.
3. **Efficiency for Developers:** Updating color schemes across the platform is now a matter of minutes, not months. Developers can easily implement color changes by modifying the relevant Alias Tokens, empowering them to swiftly respond to design updates.
4. **Collaboration and Error Detection:** Developers are no longer reliant solely on designers for color usage instructions. If a color discrepancy arises, developers can promptly identify and rectify it, ensuring seamless collaboration.
5. **Design Awareness:** Alias Tokens encourage designers to be more conscious when introducing new colors, as each addition requires thoughtful consideration of its function within the design system.
