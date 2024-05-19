import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export default function Home() {
  const { env } = getRequestContext();

  const tableRows: { variable: string; value: string }[] = Object.entries(
    env
  ).map(([key, value]) => ({
    variable: key,
    value,
  }));

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map(({ variable, value }) => (
            <tr key={value}>
              <td>{variable}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
