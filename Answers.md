1.  Explain the differences between `client-side routing` and `server-side routing`.
    Server-Side Routing:
    The request is placed to fetch information from the server.

- Causes the whole page to refresh (A new GET request returns a new document completely discarding the old document)
- Only request data that is needed (no more no less)
- Search engines are optimized for the pages that come from the Server
- It can take a while for the page to load as the data is being fetched from the Server

Client-side Routing:
A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page.

- The whole page will not refresh as the data is being used from memory/cache. Only some elements inside the application will change
- Since less data is processed routing between views is generally fast
- Smooth transition and animation between views are easier to implement
- Initial loading may take a bit longer as all the required data has to be requested and loaded
- Since server side is the standard, extra code might have to be written to make client-side routing possible
- Search engine crawling is less optimized.

1.  What does HTTP stand for?
    Hyper Text Transfer protocol
    HTTP is the underlying protocol used by the World Wide Web and this protocol defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.

1.  What does CRUD stand for?
    Create Read Update Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    C - Create - Post
    R - Read - Get
    U - Update - Put
    D - Delete - Delete

1.  Mention three tools we can use to make AJAX requests
    JQuery, Axios and Fetch are some of the best libraries for making AJAX calls.
