import os

class Minifier:
  def __init__(self):
    self.filenames = []

  def minify(self, outputname):

    outF = open(outputname,'w')

    for filename in self.filenames:
      inF = open(filename,'r')

      for line in inF:
        outF.write(line)

      inF.close()

      outF.write('\n\n')

    outF.close()

  def parseFolder(self, foldername):
    config = open('server.config','r')
    self.filenames = []
    for line in config:
      self.filenames.append("src/"+line[:-1]+".js")
    config.close()
    # self.filenames = []
    # currentPath = os.path.dirname(os.path.relpath(__file__))

    # for dir_, _, files in os.walk(foldername):
    #   for fileName in files:
    #     relDir = os.path.relpath(dir_, currentPath)
    #     relFile = os.path.join(relDir, fileName)

    #     ext = os.path.splitext(relFile)[1]
    #     if ext == '.js':
    #       self.filenames.append(relFile)

#if __name__ == '__main__':
#  m = Minifier()
#  m.parseFolder('src')
#  m.minify('CityDashboard.min.js')

import SimpleHTTPServer
import SocketServer
import urlparse

class GetHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    
  def do_GET(self):
    path = urlparse.urlparse(self.path).path

    # handle the request for the development library
    if path == "/test/js/CityDashboard.min.js":
      m = Minifier()
      m.parseFolder('src')
      m.minify('CityDashboard.min.js')

      f = open('CityDashboard.min.js')
      self.send_response(200)
      self.send_header('Content-type','application/javascript')
      self.end_headers()
      self.wfile.write(f.read())

      os.remove('CityDashboard.min.js')

    else:
      SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

if __name__ == '__main__':
  
  PORT = 8000

  handler = GetHandler

  server = SocketServer.TCPServer(('localhost', PORT), handler)
  print 'Starting server, use <Ctrl-C> to stop'
  print 'Server working at port %s, visit http://localhost:%s' % (PORT, PORT)
  server.serve_forever()