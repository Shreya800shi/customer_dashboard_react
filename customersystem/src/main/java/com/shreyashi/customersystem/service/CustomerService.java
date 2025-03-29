package com.shreyashi.customersystem.service;

import com.shreyashi.customersystem.model.Customer;

import java.util.List;

public interface CustomerService {
    public Customer saveCustomer(Customer customer);
    public List<Customer> getAllCustomers();
}
