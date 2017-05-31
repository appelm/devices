#!/usr/bin/python2

import multiprocessing
import subprocess
import os
import requests

def pinger( job_q, results_q ):
    DEVNULL = open(os.devnull,'w')
    while True:
        ip = job_q.get()
        if ip is None: break

        try:
            subprocess.check_call(['ping','-c1',ip],
                                  stdout=DEVNULL)
            results_q.put(ip)
        except:
            pass

if __name__ == '__main__':
    pool_size = 255

    jobs = multiprocessing.Queue()
    results = multiprocessing.Queue()

    pool = [ multiprocessing.Process(target=pinger, args=(jobs,results))
             for i in range(pool_size) ]

    for p in pool:
        p.start()

    for i in range(1,255):
        jobs.put('192.168.1.{0}'.format(i))

    for p in pool:
        jobs.put(None)

    for p in pool:
        p.join()

    while not results.empty():
        ip = results.get()
        print(ip)
	session = requests.Session()
	rawBody = r'{"ip":"'+ip+r'","hostname":"placeholder"}'
	headers = {"User-Agent":"Mozilla/5.0 (X11; Linux x86_64; rv:45.0) Gecko/20100101 Firefox/45.0","Connection":"close","Accept-Language":"en-US,en;q=0.5","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Content-Type":"application/json"}
	response = session.post("http://localhost:3000/", data=rawBody, headers=headers)

	print rawBody
	print("Status code:   %i" % response.status_code)
	print("Response body: %s" % response.content)
