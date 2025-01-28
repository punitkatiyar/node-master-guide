# url module

 URL handling is commonly done using the built-in url module, which provides utilities for parsing and formatting URLs.

- Protocol: Specifies the scheme used in the URL, such as http, https, or ftp.
- Hostname: The domain or IP address of the server, e.g., example.com or 127.0.0.1.
- Port: The specific port on the server to connect to, e.g., 3000 (optional if it’s the default port for the protocol).
- Pathname: The path on the server pointing to the requested resource, e.g., /articles/index.html.
- Query String: Additional parameters sent to the server, e.g., ?key=value.
- Fragment: Part of the URL after a #, which is often used for internal page navigation (not sent to the server).

  ## setup url package

> npm i url
