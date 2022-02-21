interface IPhone {
  useLightining(): void;
}

interface IAndroid {
  useMicroUsb(): void;
}

class IPhone13 implements IPhone {
  useLightining(): void {
    console.log("Using lightining");
  }
}

class GooglePixel implements IAndroid {
  useMicroUsb(): void {
    console.log("Using Micro Usb");
  }
}

class LightiningAdapterToMicroUsb implements IAndroid {
  iphone: IPhone;

  constructor(phone: IPhone) {
    this.iphone = phone;
  }

  useMicroUsb(): void {
    console.log("Using Adapter");
    this.iphone.useLightining();
  }
}

const iphone = new IPhone13();
const chargeIphone = new LightiningAdapterToMicroUsb(iphone);

chargeIphone.useMicroUsb();
