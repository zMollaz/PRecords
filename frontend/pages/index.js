import Head from "next/head";
import Navbar from "../components/Navbar";
import RecordsGallery from "../components/RecordsGallery";
import MeiliSearch from "meilisearch";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [text, setText] = useState("");
  const [query, setQuery] = useState([]);

  const client = new MeiliSearch({
    host: "http://127.0.0.1:7700/",
    // apiKey: "masterKey",
  });

  const index = client.index("patient");

  const search = async () => {
    const patients = await axios.get("http://localhost:1337/api/patients");

    const result = patients.data.data;
    let response = await index.addDocuments(result);
  };

  const handleSearch = async() => {
    const search = await index.search(text)
      setQuery(search.hits);
  };

  useEffect(() => {
    search();
  }, []);

  useEffect(() => {
    handleSearch()
  }, [text])

  return (
    <div className="">
      <Head>
        <title>PRecords</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar text={text} handleSearch={handleSearch} setText={setText} />
      <RecordsGallery patients={query} />
    </div>
  );
}
