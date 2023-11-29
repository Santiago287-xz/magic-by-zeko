import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend("re_BGyoSXGJ_5AjRVsFyjLQJmqgxQ6a9E9rD");

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const reqData = JSON.parse(req.body);
    const htmlName = reqData.name && `<h3> Nombre completo: ${reqData.name}</h3>`
    const htmlMail = reqData.text && `<p> Consulta:  ${reqData.text}</p>`
    const htmlCode = `
    <td class="esd-stripe" align="center">
    <table bgcolor="#ffffff" align="center" width="100%">
        <tbody>
            <tr>
                <td align="center">
                    <table width="100%">
                        <tbody>
                            <tr>
                                <td align="center">
                                    <table width="100%">
                                        <tbody>
                                            <tr>
                                                <td style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img src="https://i.imgur.com/6JDNdRX.png" alt style="display: block;" width="280" class="adapt-img"></a></td>
                                            </tr>
                                            <tr>
                                                <td align="center">
                                                    <h1 style="line-height: 150%;">Soporte</h1>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td align="left">
                    <table cellspacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td align="center">
                                    <table width="100%">
                                        <tbody>
                                            <tr>
                                                <h1> Email: ${reqData.email}</h1>`
                                                + htmlName
                                                + htmlMail +
                                            `</tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    </td>`
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "magicbyzeko@gmail.com",
      subject: "Consulta",
      html: htmlCode,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
