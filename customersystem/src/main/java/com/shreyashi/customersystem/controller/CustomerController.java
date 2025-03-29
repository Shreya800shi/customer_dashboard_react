package com.shreyashi.customersystem.controller;

import com.shreyashi.customersystem.model.Customer;
import com.shreyashi.customersystem.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @PostMapping("/add")
    public String add(@RequestBody Customer customer){
        customerService.saveCustomer(customer);
        return "New customer is added";
    }
    @GetMapping("/getAll")
    public List<Customer> getAllCustomer(){
        return customerService.getAllCustomers();
    }
}
