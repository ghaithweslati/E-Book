import {
  fetchMembers,
  fetchMyBorrowed,
  fetchBorroweds,
  fetchBorrowedsRetard,
  fetchMemberById,
  fetchMemberByEmailPassword,
} from "../services/members.service";
import { act } from "@testing-library/react";

describe("testing the fetchMembers", () => {
  test("should return the right array", async () => {
    let expected = [
      {
        id: 0,
        image: "1.PNG",
        nom: "Admin",
        prenom: "Admin",
        email: "admin@gmail.com",
        password: "admin",
        type: "Admin",
        etat: "Actif",
        reseau_social: {
          facebook: "facebook",
          twitter: "twitter",
          linkedin: "linkedin",
        },
        description:
          "Consectetur adipisicing elit sed do eiusmod tempor incididunt labore toloregna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoiars nisiuip commodo consequat aute irure dolor in aprehenderit aveli esseati cillum dolor fugiat nulla pariatur cepteur sint occaecat cupidatat. Caanon proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnisate natus error sit voluptatem accusantium doloremque totam rem aperiam, eaque ipsa quae abillo inventoe veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia. Voluptas sit asapernatur aut odit aut fugit, sed quia consequuntur magni dolores eos quistan ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        livres: [],
      },
    ];
    expect(fetchMembers()).toStrictEqual(expected);
  });
});

// describe('testing the fetchMyBorrowed', () => {
//     test('should return the right array', () => {
//         let expected = [

//         ];
//     });
// });
