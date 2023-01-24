import { useEffect, useState } from "react";

const useURL = (a) => {
  const [url, setUrl] = useState(document.URL.split("/"));
  const [lastPath, setLastPath] = useState("");
  const [path, setPath] = useState("");
  const [replace, setReplace] = useState("");
  useEffect(() => {
    setUrl(a.split("/"));
  }, [a]);
  useEffect(() => {
    setLastPath(url[url.length - 1]);
  }, [url]);
  useEffect(() => {
    setPath(lastPath.toUpperCase() + "/");
  }, [lastPath]);
  useEffect(() => {
    setReplace(lastPath.replace(/_/g, " "));
  }, [lastPath]);
  return [url, lastPath, path, replace];
};

export default useURL;
