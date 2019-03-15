import SimpleHTTPServer
import SocketServer

PORT = 8100

class Handler(SimpleHTTPServer.SimpleHTTPRequestHandler):
        pass
Handler.extensions_map['.mjs'] = 'text/javascript'
httpd = SocketServer.TCPServer(("", PORT), Handler)
print "serving at port", PORT
httpd.serve_forever()
