const sender = {
    name: "Tom",
    address: "123 Main St"
}

const deliveryPackage = {
    contents: "porridge"
}
deliveryPackage.sender = sender

const trackingInfo = {
    status: "in transit"
}
trackingInfo.sender = sender

