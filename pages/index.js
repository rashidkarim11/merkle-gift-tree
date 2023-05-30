import { useState } from "react";
import axios from "axios";
import MerkleTree from "@/utils/MerkleTree";
import niceList from "@/utils/niceList.json";
import { serverUrl } from "@/http.configs";

const merkleTree = new MerkleTree(niceList);

export default function Home() {
  const [gift, setGift] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      setGift("");
      const data = new FormData(event.target);
      const name = data.get("name");

      const index = niceList.findIndex((n) => n === name);
      const proof = merkleTree.getProof(index);

      const { data: gift } = await axios.post(`${serverUrl}/gift`, {
        name,
        proof,
      });

      setGift(gift);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <main className="main">
        <h2 className="main-h2 " style={{color:"green"}}>Merkle Tree Gift List</h2>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label style={{color:"green"}}>Enter Name</label>
            <input
              type="text"
              name="name"
              required
              autoComplete="off"
              placeholder="Your Name"
              style={{borderColor:"green"}}
            />
          </div>

          <button type="submit" className="btn">
            My gift?
          </button>
        </form>

        <div className="message-container">
          {gift && <h3>{gift}</h3>}
          <div className="image-container">
            {gift && /got a toy robot/.test(gift) && (
              <picture>
                <img src="/images/gift.webp" alt="gift" />
              </picture>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
