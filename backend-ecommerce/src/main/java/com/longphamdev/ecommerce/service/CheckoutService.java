package com.longphamdev.ecommerce.service;

import com.longphamdev.ecommerce.dto.Purchase;
import com.longphamdev.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
