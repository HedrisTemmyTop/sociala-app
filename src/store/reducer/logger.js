import { doc, getDoc, getDocs, collection } from "firebase/firestore";
// import { onSnapshot } from "firebase/firestore";
import { db } from "../../Auth/AuthConfig";
export const fetchPosts = async () => {
  try {
    console.log("token");
    const response = collection(db, "posts");
    const data = await getDocs(response);
    const postData = data._snapshot.docChanges.map((doc) => {
      const data = {
        body: doc.doc.data.value.mapValue.fields.body,
        name: doc.doc.data.value.mapValue.fields.name,
        date: doc.doc.data.value.mapValue.fields.date,
        userId: doc.doc.data.value.mapValue.fields.userId,
        userImage: doc.doc.data.value.mapValue.fields.userImage,
      };

      return data;
    });
    return postData;
  } catch (error) {
    return error;
  }
};
export const getUser = async (token) => {
  try {
    const user = doc(db, "users", token);
    const docSnap = await getDoc(user);

    return docSnap.data();
  } catch (error) {
    console.log(error);
  }
};
