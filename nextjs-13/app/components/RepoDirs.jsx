import Link from "next/link";

const fetchRepoContents = async (name) => {
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  try {
    const response = await fetch(
      `https://api.github.com/repos/mouli0007/${name}/contents`,
      {
        next: {
          revalidate: 60, 
        },
      }
    );

    const contents = await response.json();
    return contents;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);

  const dirs = contents.filter((con) => con.type === "file");
  return (
    <div>
      <h3>Directories</h3>
      <p>availbale</p>
      <ul>
        {dirs.map((dir) => {
          return (
            <>
              <li key={dir.path}>
                <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default RepoDirs;
