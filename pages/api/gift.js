// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import verifyProof from "@/utils/verifyProof";

const MERKLE_ROOT =
  "ddd59a2ffccddd60ff47993312821cd57cf30f7f14fb82937ebe2c4dc78375aa";

export default function handler(req, res) {
  const { name, proof } = req.body;

  const isInTheList = verifyProof(proof, name, MERKLE_ROOT);
  if (isInTheList) return res.send("You got a toy robot!");
  res.send("You are not on the list :(");
}
