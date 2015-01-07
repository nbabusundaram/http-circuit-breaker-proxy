# http-circuit-breaker-proxy
Circuit Breaker proxy for Http Services powered by promise-circuitbreaker

# Prerequisites

Your system should have nodejs installed

You should have admin/root access permission to run nodejs server


# Usage

Circuit breaker proxy will help you to protect your https services from the casecading failures due to unexpected networks failures / huge stress/load requests.

# Instructions

## Step 1:  Run Sample Application : Address API


1. Download the source zip and extract the content in to the prefreable location.


2. Open the new terminal and cd in to the extracted directory and cd in to the sub folder :Example App / Address API

		
		Example 
	
		nbabu@nbabu-Ubundu:~/http-circuit-breaker-proxy-master/Example App/AddressAPI$ 


3. Run the following command to install the dependencies for the Address API applications #> npm install. It will install the libraires required for the application. 

		Example

    
		root@nbabu-Ubundu:~/http-circuit-breaker-proxy-master/Example App/AddressAPI# npm install




3. Then run the following command to run the nodejs address api application :::  node index.js  (in Ubuntu, nodejs index.js)

		Example

		root@nbabu-Ubundu:~/http-circuit-breaker-proxy-master/Example App/AddressAPI# nodejs index.js




4. Now you should able to get the log saying that

		Enterprise Address API Service started successfully on Port: 7000
	
		multivision is open...


## Step 2:  Run Circuit Breaker Proxy Application : To Protect above sample application from casecading failures
 

	1. Open another terminal
	
	2. CD in to the root of the downloaded directory

		Example
		nbabu@nbabu-Ubundu:~/http-circuit-breaker-proxy-master$ 

	3. Run the following command to install the dependencies for the Circuit Breaker Proxy Application #> npm install. It will install the libraires required for the application. 

		Example
		nbabu@nbabu-Ubundu:~/http-circuit-breaker-proxy-master$ npm install

	4. Then run the following command to run the nodejs Circuit breaker application :::  node index.js  (in Ubuntu, nodejs index.js)

		
		Example
		nbabu@nbabu-Ubundu:~/http-circuit-breaker-proxy-master$ nodejs index.js

	5. Now you shoule able to get the log saying that
	
		Enterprise Proxy Service started successfully on Port: 9000


## Step 3: Test your Address API


		hit your browser/curl with the following url  :

		http://localhost:7000/address/ASCN%201ZZ

	Result shoud be like

		[{"favoriteFruit":"apple","longitude":"456.346","latitude":"124.678","registered":"2014-11-19T11:13:04.000Z","postcode":"ASCN 1ZZ","city":"WC1V 7PB","town":"ASCN 1ZZ","buildingno":"201","buildingname":"A Blokc","street1":"533 Montgomery Place, Biehle, Louisiana, 9197","phone":"+1 (894) 521-3885","email":"lambertkeller@chillium.com","company":"CHILLIUM","gender":"Female","fullname":"Shane Tommy","eyeColor":"green","age":"24","picture":"http://img5.imageshack.us/img5/8059/matt013.jpg","isActive":"true","_id":"546c7b404d61fd8a28782fae","__v":0},{"favoriteFruit":"apple","longitude":"423.567","latitude":"148.908","registered":"2014-11-19T11:13:04.000Z","postcode":"ASCN 1ZZ","city":"WC2A 1RP","town":"WC2A 1PQ","buildingno":"201","buildingname":"A Blokc","street1":"533 Montgomery Place, Biehle, Louisiana, 9197","phone":"+1 (894) 521-3885","email":"lambertkeller@chillium.com","company":"CHILLIUM","gender":"Male","fullname":"Shane Benny","eyeColor":"green" .........

## Step 4: Test your Circuit Breaker Application

		hit your browser/curl with the following url  :

		http://localhost:9000/cb/address/ASCN%201ZZ

	Result shoud be the same like above


## That's all your address api application has protected from the circuit breaker




# Test Circuit breaker functionality

	1. Open another terminal  

	2. Run some load test using bench-rest to simulate the load. 


	for Example:

		root@nbabu-Ubundu:~/src# bench-rest http://localhost:9000/cb/address/ASCN%201ZZ -n 1000 -c 50

		root@nbabu-Ubundu:~/src# bench-rest http://localhost:9000/cb/address/ASCN%201ZZ -n 1000 -c 100

		root@nbabu-Ubundu:~/src# bench-rest http://localhost:9000/cb/address/ASCN%201ZZ -n 1000 -c 200

		root@nbabu-Ubundu:~/src# bench-rest http://localhost:9000/cb/address/ASCN%201ZZ -n 100 -c 10

		root@nbabu-Ubundu:~/src# bench-rest http://localhost:9000/cb/address/ASCN%201ZZ -n 100 -c 30



Now you should able to see the circuit breaker logs like "Circuit-Open" , "Circuit-Close", in the circuit breaker application terminal.

		Success: served properly
		Success: served properly
		Success: served properly
		Success: served properly


		Circuit is open!
		Circuit is open!
		Circuit is open!
		Circuit is open!
		Circuit is open!
		Circuit is open!


# Visualise the Circuit breaker work using Kibana analytics.

		For that , please follow my another github instruction to have elk cluster in your system.
	
		https://github.com/nbabusundaram/elk

	
		Then you should able to see the circuit breaker analytics in the kibana. (http://localhost:9292).




# Configuration

	How to update the configuration?  - I will keep you posted. 	





	
	    


