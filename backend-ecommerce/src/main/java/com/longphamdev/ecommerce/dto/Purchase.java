package com.longphamdev.ecommerce.dto;

import java.util.Set;

import com.longphamdev.ecommerce.entity.Address;
import com.longphamdev.ecommerce.entity.Customer;
import com.longphamdev.ecommerce.entity.Order;
import com.longphamdev.ecommerce.entity.OrderItem;

import lombok.Data;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
