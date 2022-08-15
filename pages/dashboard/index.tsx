import Head from "next/head";
import HeadContents from "../../src/components/HeadContents";
import Button from "../../src/components/button/Button";
import styles from "./dashBoard.module.css";
import { useSession } from "next-auth/react";
import DashboardLayout from "./DashboardLayout";
import { ReactElement, useEffect, useState } from "react";
import { Friends } from "@prisma/client";
import { prisma } from "../../prisma/db";

export async function getStaticProps() {
  const friends = await prisma.friends.findMany();

  return {
    props: { friends },
  };
}

type Tprops = {
  friends: Friends[];
};

const DashBoard = ({ friends }: Tprops) => {
  const { data, status } = useSession();
  const [showFriends, setShowFriends] = useState(false);
  const [friendList, setFriendList] = useState<Friends[]>(friends);

  const handleClick = () => {
    setShowFriends(!showFriends);
  };
  useEffect(() => {
    setFriendList(friends)
  }, [friends])
  if (data?.user && status === "authenticated") {
    return (
      <>
        <Head>
          <HeadContents />
        </Head>
        <div className={styles.container}>
          <ul className={styles.ul_main}>
            {friendList.map((friend: Friends) => {
              return (
                <li key={friend.id} className={styles.li_main}>
                  <p className={styles.main_p}>{friend.name}</p>
                  <Button className="dashBoard_btn" onClick={() => null}>
                    profile
                  </Button>
                </li>
              );
            })}
          </ul>
          <Button className="dashBoard_close_btn" onClick={handleClick}>
            close
          </Button>
        </div>
      </>
    );
  } else return null;
};

DashBoard.getLayout = function getLayout(DashBoard: ReactElement) {
  return <DashboardLayout>{DashBoard}</DashboardLayout>;
};

export default DashBoard;