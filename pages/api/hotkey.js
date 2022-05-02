export default function handler(req, res) {
    const currentTime = new Date().getTime();
    const response = fetch(
        `https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?cv=4747474&ct=24&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=1&uin=0&g_tk_new_20200303=5381&g_tk=5381&hostUin=0&_${currentTime}`
    );
    response
        .then((res) => res.json())
        .then((data) => {
            res.status(200).json({
                data: data.data.hotkey,
            });
        });
}
