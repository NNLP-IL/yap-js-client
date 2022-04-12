import { YapClient } from "../src/index";

describe('testing library', () => {
    let client: YapClient;
    beforeAll(() => {
        const url = process.env.YAP_URL ?? "http://localhost:8000";
        client = new YapClient(url);
    })

    test('joint analysis', async () => {
        const analysis = await client.jointAnalysis("גנן גידל דגן בגן");
        console.log("joint analysis result", analysis);
        expect(analysis).toBeTruthy();
    })
})