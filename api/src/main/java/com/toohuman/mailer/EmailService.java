package com.toohuman.mailer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.toohuman.model.Order;

@Service
public class EmailService {
	@Autowired
	private JavaMailSender mailSender;
	
	public void sendEmail(Order order) {
		SimpleMailMessage message = new SimpleMailMessage();
		
		message.setFrom("earlyamericansacredmusic@gmail.com");
		message.setTo("nymcooke@gmail.com");
		message.setText("Name: " + order.getFirstName() + " " + order.getLastName() + 
						"\nEmail: " + order.getEmail() + 
						"\nTotal: $" + order.getTotal() + 
						"\nMessage: " + order.getMessage());
		message.setSubject(order.getFirstName() + " placed an order for $" + order.getTotal() + "!");
		
		mailSender.send(message);
		
		System.out.println("Mail sent successfully...");
		
	}
}
