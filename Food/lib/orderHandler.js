export const createOrder = async ({ name, phone, address, total, PaymentMethod }) => {
    const res = await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify({
            name: name,
            phone: phone,
            address: address,
            total: parseFloat(total),
            method: PaymentMethod,
            status: 1
        }),
    });
    const data = await res.json(); // Use res.json() to parse JSON
    return data;
}
