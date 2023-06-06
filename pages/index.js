/**
 * Bazar Profile Finder Coding Interview
 * Mostly stolen from https://medium.com/@justin.sherman/react-coding-interview-challenge-18-257bbcb7429a but I changed it cuz I didnt like his code also I wanted it to work with NextJS
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { generateProfile } from "../lib/profileUtils";
import ProfileList from "../lib/components/ProfileList";
import Search from "../lib/components/Search";


const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    axios
      .get("https://randomuser.me/api?results=200")
      .then((res) => {
        const generatedProfiles = res.data.results.map(generateProfile);
        setProfiles(generatedProfiles);
        setFilteredProfiles(generatedProfiles);
      })
      .catch((err) => {
        console.error(err);
        alert("Profile request failed");
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = profiles.filter((profile) => {
      const fullName = `${profile.name}`;
      return fullName.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredProfiles(filtered);
  };

  const handleBackToHome = () => {
    setFilteredProfiles(profiles);
  };

  return (
    <div className="header">
      <header>
        <h1 className="home" onClick={handleBackToHome}>Bazar Coding Challenge</h1>
        <div>
          <Search className="search" onSearch={handleSearch} />
        </div>
      </header>
      {filteredProfiles.length > 0 ? (
        <ProfileList profiles={filteredProfiles} />
      ) : (
        <p>No matching profiles found.</p>
      )}
      <div className="margin"></div>
      <footer>
        <div className="foot-content">
        <h4>Made by Walker Fiene</h4>
        </div>
      </footer>
    </div>
  );
};

export default Home;



