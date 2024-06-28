package com.toohuman.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
public class WebMainController {

    @RequestMapping(value = "/")
    public String home() {
        return "index.html";
    }

    @RequestMapping(value = "/about")
    public String about() {
        return "index.html";
    }

    @RequestMapping(value = "/search")
    public String search() {
        return "index.html";
    }

    @RequestMapping(value = "/donate")
    public String donate() {
        return "index.html";
    }
    
    @RequestMapping(value = "/transcriptions")
    public String transcriptions() {
        return "index.html";
    }  

    
    @RequestMapping(value = "/inventories")
    public String inventories() {
        return "index.html";
    }
    
    @RequestMapping(value = "/database")
    public String database() {
        return "index.html";
    }
    
    @RequestMapping(value = "/admin")
    public String admin() {
        return "index.html";
    }
    
    @RequestMapping(value = "login")
    public String login() {
		return "login.html";
    }
    
}