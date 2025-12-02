// ============================================
// SOCIAL MEDIA STATS CONFIGURATION
// ============================================
// Update your real numbers here!
// Just change the numbers and save this file.
// ============================================

const socialMediaStats = {
    // Instagram Stats
    instagram: {
        followers: 5388,    // 👈 CHANGE THIS to your real Instagram follower count
        posts: 201          // 👈 CHANGE THIS to your real Instagram post count
    },

    // Facebook Stats
    facebook: {
        followers: 20502,    // 👈 CHANGE THIS to your real Facebook follower/like count
        posts: 80           // 👈 CHANGE THIS to your real Facebook post count
    },

    // YouTube Stats
    youtube: {
        subscribers: 8164,  // 👈 CHANGE THIS to your real YouTube subscriber count
        videos: 80         // 👈 CHANGE THIS to your real YouTube video count
    }
};

// ============================================
// AUTO-CALCULATION (Don't change this part)
// ============================================

// Calculate total followers automatically
const totalFollowers =
    socialMediaStats.instagram.followers +
    socialMediaStats.facebook.followers +
    socialMediaStats.youtube.subscribers;

// Calculate total posts automatically
const totalPosts =
    socialMediaStats.instagram.posts +
    socialMediaStats.facebook.posts +
    socialMediaStats.youtube.videos;

const totalPlatforms = 3; // Instagram, Facebook, YouTube, Email

// ============================================
// APPLY STATS TO PAGE (Don't change this part)
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Update Instagram stats
    const instagramCounters = document.querySelectorAll('.instagram-link .counter');
    if (instagramCounters[0]) instagramCounters[0].setAttribute('data-target', socialMediaStats.instagram.followers);
    if (instagramCounters[1]) instagramCounters[1].setAttribute('data-target', socialMediaStats.instagram.posts);

    // Update Facebook stats
    const facebookCounters = document.querySelectorAll('.facebook-link .counter');
    if (facebookCounters[0]) facebookCounters[0].setAttribute('data-target', socialMediaStats.facebook.followers);
    if (facebookCounters[1]) facebookCounters[1].setAttribute('data-target', socialMediaStats.facebook.posts);

    // Update YouTube stats
    const youtubeCounters = document.querySelectorAll('.youtube-link .counter');
    if (youtubeCounters[0]) youtubeCounters[0].setAttribute('data-target', socialMediaStats.youtube.subscribers);
    if (youtubeCounters[1]) youtubeCounters[1].setAttribute('data-target', socialMediaStats.youtube.videos);

    // Update total stats
    const totalStats = document.querySelectorAll('.stat-number[data-target]');
    if (totalStats[0]) totalStats[0].setAttribute('data-target', totalFollowers);
    if (totalStats[1]) totalStats[1].setAttribute('data-target', totalPosts);
    if (totalStats[2]) totalStats[2].setAttribute('data-target', totalPlatforms);

    // Log the stats to console for verification
    console.log('📊 Social Media Stats Loaded:');
    console.log('Instagram:', socialMediaStats.instagram.followers, 'followers,', socialMediaStats.instagram.posts, 'posts');
    console.log('Facebook:', socialMediaStats.facebook.followers, 'followers,', socialMediaStats.facebook.posts, 'posts');
    console.log('YouTube:', socialMediaStats.youtube.subscribers, 'subscribers,', socialMediaStats.youtube.videos, 'videos');
    console.log('TOTAL:', totalFollowers, 'followers,', totalPosts, 'posts');
});