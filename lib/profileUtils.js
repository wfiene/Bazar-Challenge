export const PROFIILE_PARAMS = [
    {
        columnTitle: "Profile-Pic",
        key: "thumb",
        getValue: (profile) => profile.picture.thumbnail,
    },
    {
        columnTitle: "Full Name",
        key: "name",
        getValue: (profile) => `${profile.name.first} ${profile.name.last}`,
    },
    {
        columnTitle: "Age",
        key: "age",
        getValue: (profile) => profile.dob.age,
    },
    {
        columnTitle: "Email",
        key: "email",
        getValue: (profile) => profile.email,
    },
    // {
    //     columnTitle: "Profile Pic",
    //     key: "pic",
    //     getValue: (profile) => profile.picture.large,
    // },
    {
        columnTitle: "Location",
        key: "street",
        getValue: (profile) => `${profile.location.street.number} ${profile.location.street.name}, ${profile.location.city}, ${profile.location.country}`,
    },
];

export const generateProfile = (profileResult) => {
    const profile = {};
    PROFIILE_PARAMS.forEach(({ key, getValue }) => {
        profile[key] = getValue(profileResult);
    });
    return profile;
};
