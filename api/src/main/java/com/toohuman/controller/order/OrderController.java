package com.toohuman.controller.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.toohuman.mailer.EmailService;
import com.toohuman.model.Order;

@RestController
@CrossOrigin(origins = { "http://www.sacredmusicinventory.org", "http://www.sacredmusicinventory.com",
		"http://sacredmusicinventory.com", "http://sacredmusicinventory.org",
		"https://demo.sacredmusicinventory.org",
		"http://earlyamericansacredmusic.org", "http://www.earlyamericansacredmusic.org",
		"https://earlyamericansacredmusic.org", "https://www.earlyamericansacredmusic.org",
		"http://localhost:3000", "localhost:3000"}, maxAge = 3600)
public class OrderController {
	@Autowired
	private EmailService emailService;

	//update collection information in database and return updated collection object
	@RequestMapping(method = RequestMethod.POST, value = "/orderSuccess")
	public Order sendOrder(@RequestBody Order order) {
		System.out.println("Sending e-mail...");


		emailService.sendEmail(order);
		
		return order;
	}
	
}
