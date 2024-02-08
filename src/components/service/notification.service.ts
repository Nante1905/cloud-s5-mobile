import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from "@capacitor/push-notifications";
import { sendToken } from "./inscription.service";

export const pushNotificationRegister = (id: number) => {
  PushNotifications.checkPermissions().then((perm) => {
    if (perm.receive != "granted") {
      PushNotifications.requestPermissions().then((perm) => {
        if (perm.receive == "granted") {
          alert("Permission accordée");
          PushNotifications.register();
        } else {
          alert("Permission refusée");
        }
      });
    }
  });

  // Register with Apple / Google to receive push via APNS/FCM

  // On success, we should be able to receive notifications
  PushNotifications.addListener("registration", (token: Token) => {
    // showToast('Push registration success');
    alert("tonga token");
    console.log(token);
    alert(token.value);
    //   setState((prevState) => ({
    //     ...prevState,
    //     userToken: {
    //       ...prevState.userToken,
    //       token: token.value,
    //     },
    //   }));

    sendToken({
      token: token.value,
      idUtilisateur: id,
    })
      .then((res) => console.log(res))
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  });

  // Some issue with our setup and push will not work
  PushNotifications.addListener("registrationError", (error: any) => {
    alert("Error on registration: " + JSON.stringify(error));
  });

  // Show us the notification payload if the app is open on our device
  PushNotifications.addListener(
    "pushNotificationReceived",
    (notification: PushNotificationSchema) => {
      console.log(notification);
    }
  );

  // Method called when tapping on a notification
  PushNotifications.addListener(
    "pushNotificationActionPerformed",
    (notification: ActionPerformed) => {
      console.log(notification);
    }
  );
};
