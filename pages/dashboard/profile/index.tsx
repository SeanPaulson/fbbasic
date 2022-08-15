import Head from "next/head";
import HeadContents from "../../../src/components/HeadContents";
import Button from "../../../src/components/button/Button";
import styles from "./profile.module.css";
import { useSession } from "next-auth/react";
import DashboardLayout from "../DashboardLayout";
import {
  ChangeEvent,
  ReactElement,
  useContext,
  useState,
} from "react";
import { UserContext } from "../../../src/components/UserContext";

function selectNodeToEdit(action: { type: string }): string | void {
  switch (action.type) {
    case "name":
      return action.type;
    case "email":
      return action.type;
    case "phone":
      return action.type;
    case "address":
      return action.type;
    default:
      break;
  }
}

const Profile = () => {
  const { data, status } = useSession();
  const {state, dispatch} = useContext(UserContext)
  const [editting, setEditting] = useState(false);
  const [selectedNode, setSelectedNode] = useState("");

  function handleClickEditting(fieldToEdit: string) {
    const fieldName = selectNodeToEdit({ type: fieldToEdit });
    fieldName && setSelectedNode(fieldName);
    setEditting(!editting);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    const { name } = e.currentTarget;
    dispatch({type: `${name}`, payload: value})
  }

  if (data && status === "authenticated") {
    return (
      <>
        <Head>
          <HeadContents />
        </Head>
        <div className={styles.container}>
          <ul className={styles.ul_main}>
            <li className={styles.li_main}>
              <p className={styles.main_p}>{data?.user?.name}</p>
              <p style={{ paddingRight: "1rem" }}>User Name</p>
            </li>
            <li className={styles.li_main}>
              {editting && selectedNode === "email" ? (
                <input
                  className={styles.main_input}
                  name="email"
                  placeholder="email"
                  onChange={(e) => handleChange(e)}
                ></input>
              ) : (
                <p className={styles.main_p}>{state.email ? state.email : 'example@email.com'}</p>
              )}
              <Button
                className="dashBoard_btn"
                onClick={() => handleClickEditting("email")}
              >
                {editting && selectedNode === "email" ? "save" : "Edit Email"}
              </Button>
            </li>
            <li className={styles.li_main}>
              {editting && selectedNode === "phone" ? (
                <input
                  className={styles.main_input}
                  name='phone'
                  placeholder="phone"
                  onChange={(e) => handleChange(e)}
                ></input>
              ) : (
                <p className={styles.main_p}>
                  {state.phone ? state.phone : "555-555-5555"}
                </p>
              )}
              <Button
                className="dashBoard_btn"
                onClick={() => handleClickEditting("phone")}
              >
                {editting && selectedNode === "phone"  ? "save" : "Edit Number"}
              </Button>
            </li>
            <li className={styles.li_main}>
              {editting && selectedNode === "address" ? (
                <input
                  className={styles.main_input}
                  name="address"
                  placeholder="address"
                  onChange={(e) => handleChange(e)}
                ></input>
              ) : (
                <p className={styles.main_p}>
                  {state.address ? state.address : "main st town, state, 33333"}
                </p>
              )}
              <Button
                className="dashBoard_btn"
                onClick={() => handleClickEditting("address")}
              >
                {editting && selectedNode === "address" ? "save" : "Edit address"}
              </Button>
            </li>
          </ul>
          <Button className="dashBoard_btnDeleteProfile" onClick={() => null}>
            Delete Profile
          </Button>
        </div>
      </>
    );
  } else return null;
};

Profile.getLayout = function getLayout(Profile: ReactElement) {
  return <DashboardLayout>{Profile}</DashboardLayout>;
};

export default Profile;
