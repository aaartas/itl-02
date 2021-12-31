// ユーザーデータをHTMLに反映
export const setUserData = async (userData) => {
    document.getElementById('show-icon').src = userData.user_icon;
    document.getElementById('show-name').innerHTML = userData.user_name;
    document.getElementById('show-title').innerHTML = userData.list_title;
    document.getElementById('show-bio-text').innerHTML = userData.user_bio;

    // 登録リストの取得
    const { getLists } = await import('../../model/listModel');
    let list = await getLists(userData.uid);
    
    if (list.length == 0) {
        document.getElementById('show-list-unregistered').style.display = 'block';
    } else {
        document.getElementById('show-list-unregistered').style.display = 'none';
    }

    document.getElementById('show-prof').onclick = () => {
        location.href = 'https://twitter.com/' + userData.twitter_disp_id;
    };
}