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

import sys
import random
import json
import string

def genJSON(arg):
  coordinates = []

  sample = xrange(1000000)

  for i in range(arg):
    coordinates.append({
      "lat": random.uniform(-80,80),
      "lng": random.uniform(-180,180),
      "value": [random.sample( sample, 5 ),random.sample( sample, 5 )],
      "gibberish": ''.join(random.choice(string.lowercase) for i in range(15))
      })

  a = open('json-test/'+str(arg)+".json","w")
  a.write(json.dumps(coordinates))
  a.close()

# if __name__ == '__main__':
#   arg = sys.argv
#   if len(arg) == 1:
#     arg = 500
#   else:
#     arg = int(arg[1])
#   genJSON(arg);

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
      f.close()

      os.remove('CityDashboard.min.js')

    elif path.startswith("/test/position"): 
      n = urlparse.urlparse(self.path).query
      if len(n) == 0:
        n = '500'

      if not os.path.exists('json-test'):
        os.makedirs('json-test')

      if not os.path.exists('json-test/'+n+".json"):
        genJSON(int(n))

      f = open('json-test/'+n+'.json')
      self.send_response(200)
      self.send_header('Content-type','application/json')
      self.end_headers()
      self.wfile.write(f.read())
      f.close()
    
    else:
      SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

if __name__ == '__main__':
  
  PORT = 8000

  handler = GetHandler

  server = SocketServer.TCPServer(('localhost', PORT), handler)
  print 'Starting server, use <Ctrl-C> to stop'
  print 'Server working at port %s, visit http://localhost:%s' % (PORT, PORT)
  server.serve_forever()