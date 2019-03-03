import { PermissionsAndroid } from "react-native";

export default function requestPermissions(
  permissions,
  onGranted,
  onDenied,
  onDeniedForever
) {
  const checks = [];
  for (let index = 0; index < permissions.length; index++) {
    checks[index] = PermissionsAndroid.check(permissions[index]);
  }
  Promise.all(checks).then(result => {
    let shouldShowRationale = false;
    result.forEach(element => {
      if (!element) {
        shouldShowRationale = true;
      }
    });
    if (shouldShowRationale) {
      PermissionsAndroid.requestMultiple(permissions).then(
        permissionResult => {
          let isGranted = true;
          for (let i = 0; i < permissions.length; i++) {
            const resultIndividual = permissionResult[permissions[i]];
            if (resultIndividual !== PermissionsAndroid.RESULTS.GRANTED) {
              if (
                resultIndividual === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
              ) {
                onDeniedForever();
                return;
              }
              isGranted = false;
            }
          }
          if (isGranted) {
            onGranted();
          } else {
            onDenied();
          }
        },
        error => console.log(error)
      );
    } else {
      onGranted();
    }
  });
}
