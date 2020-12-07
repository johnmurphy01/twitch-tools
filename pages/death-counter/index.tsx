import { Channel } from "pusher-js";
import React, { useEffect, useState } from "react";

interface Props {
  channel: Channel;
}

const DeathCounter: React.FC<Props> = ({ channel }) => {
  const [deathCount, setDeathCount] = useState<number>(0);

  useEffect(() => {
    channel.bind("death-count", function (data) {
      setDeathCount((count) => count + 1);
    });
  }, []);

  return (
    <>
      <div style={{ fontFamily: "Slant", color: "#FF9900", marginBottom: "10px" }}>
        <label>{`Dirtnaps: ${deathCount}`}</label>
      </div>
    </>
  );
};

export default DeathCounter;
