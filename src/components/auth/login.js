import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/fb.config";
import { savedb } from "../utlis/admin/savedb";

export async function googlelogin(router) {
  const googleProvider = new GoogleAuthProvider();
  await signInWithPopup(auth, googleProvider)
    .then((res) => {
      (async () => {
        await savedb({
          email: res.user.email,
          name: res.user.displayName,
          photoURL: res.user.photoURL,
        });
        router.push("/");
      })();
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function githublogin(router) {
  const githubProvider = new GithubAuthProvider();
  await signInWithPopup(auth, githubProvider)
    .then((res) => {
      (async () => {
        await savedb({
          email: res.user.email,
          name: res.user.displayName,
          photoURL: res.user.photoURL,
        });
        router.push("/");
      })();
    })
    .catch((err) => {
      console.log(err);
    });
}
