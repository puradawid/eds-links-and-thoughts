# Edge Delivery Services

## Links

### Boilerplates
* [EDS boilerplate](https://github.com/adobe/aem-boilerplate/tree/main/blocks/columns)

### Documentation
* [Documentation Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/overview)
* [Milo Documentation](https://milo.adobe.com/developer/academy/tour)
* [Edge Delivery Best Practices](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/build/dev-collab-and-good-practices)

### Tutorials
* [Milo Collage](https://github.com/adobecom/milo-college/tree/main)

### Implementations
* [Adobe.com, only when not logged in](https://www.adobe.com)
* [Franklin Wine](https://franklin.wine/)

## Key Concepts

### Opinionated Architecture

Edge Delivery Services tool has a limited number of features, but that does not mean basic CMS features are stipped out.

Here are the missing concepts (compared to previous AEM versions):
* no full-text search in the service
* no data validation in document-based editing
* no internal links
* no out-of-the-box templating system

### Built-in Link Features

There are two main features in constructing links:
* replace `.html` (if included, otherwise just add at the end of path) with `.plain.html` to the link - for instance `adobe.com/home.plain.html` - this displays pure HTML without the `head` and the main `html` tag.
* replace extension with `.md` - it returns the Markdown file instead of HTML
