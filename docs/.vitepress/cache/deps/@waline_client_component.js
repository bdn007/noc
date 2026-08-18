import {
  Z,
  a,
  autosize_esm_default,
  c,
  d,
  i,
  markedHighlight,
  o,
  r,
  require_ReCaptcha,
  s,
  useDebounceFn,
  useEventListener,
  useNow,
  useScriptTag,
  useStorage,
  useStyleTag,
  watchImmediate
} from "./chunk-QCDEUH2Y.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  h,
  inject,
  isRef,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  openBlock,
  provide,
  reactive,
  ref,
  renderList,
  resolveComponent,
  toDisplayString,
  unref,
  useTemplateRef,
  vModelDynamic,
  vModelText,
  vShow,
  watch,
  withDirectives
} from "./chunk-IGPK6NSI.js";
import {
  __toESM
} from "./chunk-EQCVQC35.js";

// node_modules/@waline/client/dist/component.js
var import_recaptcha_v3 = __toESM(require_ReCaptcha());
var fe = () => useStorage(`WALINE_USER_META`, { nick: ``, mail: ``, link: `` });
var pe = () => useStorage(`WALINE_COMMENT_BOX_EDITOR`, ``);
var me = useStorage(`WALINE_LIKE`, []);
var R = () => me;
var z = useStorage(`WALINE_REACTION`, {});
var he = () => z;
var ge = {};
var _e = (e) => {
  let t = ge[e] ?? (ge[e] = (0, import_recaptcha_v3.load)(e, { useRecaptchaNet: true, autoHideBadge: true }));
  return { execute: (e2) => t.then((t2) => t2.execute(e2)) };
};
var ve = (e) => ({ execute: async (t) => {
  let { load: n } = useScriptTag(`https://challenges.cloudflare.com/turnstile/v0/api.js`, void 0, { async: false });
  await n();
  let { turnstile: r2 } = window;
  return new Promise((n2) => {
    r2 == null ? void 0 : r2.ready(() => {
      r2.render(`.wl-captcha-container`, { sitekey: e, action: t, size: `compact`, callback: n2 });
    });
  });
} });
var ye = useStorage(`WALINE_USER`, {});
var be = () => ye;
var xe = /* @__PURE__ */ new Set([`nick`, `mail`, `link`]);
var B = (e) => e.filter((e2) => xe.has(e2));
var V = [`//unpkg.com/@waline/emojis@1.1.0/weibo`];
var Se = [`//unpkg.com/@waline/emojis/tieba/tieba_agree.png`, `//unpkg.com/@waline/emojis/tieba/tieba_look_down.png`, `//unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png`, `//unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png`, `//unpkg.com/@waline/emojis/tieba/tieba_awkward.png`, `//unpkg.com/@waline/emojis/tieba/tieba_sleep.png`];
var H = (e) => new Promise((t, n) => {
  if (e.size > 128 * 1e3) {
    n(Error(`File too large! File size limit 128KB`));
    return;
  }
  let r2 = new FileReader();
  r2.readAsDataURL(e), r2.addEventListener(`load`, () => {
    t(r2.result);
  }), r2.addEventListener(`error`, n);
});
var U = (e) => e ? `<p class="wl-tex">TeX is not available in preview</p>` : `<span class="wl-tex">TeX is not available in preview</span>`;
var W = (e) => {
  let t = (t2, n = {}) => fetch(`https://api.giphy.com/v1/gifs/${t2}?${new URLSearchParams({ lang: e, limit: `20`, rating: `g`, api_key: `6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp`, ...n }).toString()}`).then((e2) => e2.json()).then(({ data: e2 }) => e2.map((e3) => ({ title: e3.title, src: e3.images.downsized_medium.url })));
  return { search: (e2) => t(`search`, { q: e2, offset: `0` }), default: () => t(`trending`, {}), more: (e2, n = 0) => t(`search`, { q: e2, offset: n.toString() }) };
};
var G = RegExp(`(${/[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF\u0400-\u04FF]+|\w+/u.source}|${/</u.source})|((?:${/(?:^|\s)\/\/(.+?)$/gmu.source})|(?:${/\/\*([\S\s]*?)\*\//gmu.source}))`, `gmiu`);
var Ce = [`23AC69`, `91C132`, `F19726`, `E8552D`, `1AAB8E`, `E1147F`, `2980C1`, `1BA1E6`, `9FA0A0`, `F19726`, `E30B20`, `E30B20`, `A3338B`];
var K = {};
var we = (e) => {
  let t = 0;
  return e.replace(G, (e2, n, r2) => {
    if (r2) return `<span style="color: slategray">${r2}</span>`;
    if (n === `<`) return `&lt;`;
    let i2;
    K[n] ? i2 = K[n] : (i2 = Ce[t], K[n] = i2);
    let a2 = `<span style="color: #${i2}">${n}</span>`;
    return t = ++t % Ce.length, a2;
  });
};
var q = `nick.nickError.mail.mailError.link.optional.placeholder.sofa.submit.like.cancelLike.reply.cancelReply.comment.refresh.more.preview.emoji.uploadImage.seconds.minutes.hours.days.now.uploading.login.logout.admin.sticky.word.wordHint.anonymous.level0.level1.level2.level3.level4.level5.gif.gifSearchPlaceholder.profile.approved.waiting.spam.unsticky.oldest.latest.hottest.reactionTitle.commentUnderReview.subPostComment.subSiteComment.subscribeToReplies`.split(`.`);
var J = (e) => Object.fromEntries(e.map((e2, t) => [q[t], e2]));
var Y = J(`Benutzername,Der Benutzername darf nicht weniger als 3 Bytes umfassen.,E-Mail,Bitte bestätigen Sie Ihre E-Mail-Adresse.,Webseite,Optional,Kommentieren Sie hier...,Noch keine Kommentare.,Senden,Gefällt mir,Gefällt mir nicht mehr,Antworten,Antwort abbrechen,Kommentare,Aktualisieren,Mehr laden...,Vorschau,Emoji,Ein Bild hochladen,Vor einigen Sekunden,Vor einigen Minuten,Vor einigen Stunden,Vor einigen Tagen,Gerade eben,Hochladen läuft,Anmelden,Abmelden,Admin,Angeheftet,Wörter,Bitte geben Sie Kommentare zwischen $0 und $1 Wörtern ein! Aktuelle Anzahl der Wörter: $2,Anonym,Zwerge,Hobbits,Ents,Magier,Elfen,Maïar,GIF,Nach einem GIF suchen,Profil,Genehmigt,Ausstehend,Spam,Lösen,Älteste,Neueste,Am beliebtesten,Was denken Sie?,Ihr Kommentar wird überprüft und ist derzeit nur für Sie sichtbar. Nach der Genehmigung wird er öffentlich angezeigt.,Abonnieren Sie die Kommentare zu diesem Beitrag,Abonnieren Sie die Kommentare auf dieser Seite,Abonnieren Sie die Antworten auf Ihre Kommentare`.split(`,`));
var X = J(`NickName,NickName cannot be less than 3 bytes.,E-Mail,Please confirm your email address.,Website,Optional,Comment here...,No comment yet.,Submit,Like,Cancel like,Reply,Cancel reply,Comments,Refresh,Load More...,Preview,Emoji,Upload Image,seconds ago,minutes ago,hours ago,days ago,just now,Uploading,Login,logout,Admin,Sticky,Words,Please input comments between $0 and $1 words!
 Current word number: $2,Anonymous,Dwarves,Hobbits,Ents,Wizards,Elves,Maiar,GIF,Search GIF,Profile,Approved,Waiting,Spam,Unsticky,Oldest,Latest,Hottest,What do you think?,Your comment is under review and is currently only visible to you. It will be publicly visible after approval.,Subscribe to comments of this post,Subscribe to comments of this site,Subscribe to replies of your comments`.split(`,`));
var Z2 = J(`Nombre de usuario,El nombre de usuario no puede tener menos de 3 bytes.,Correo electrónico,Por favor confirma tu dirección de correo electrónico.,Sitio web,Opcional,Comenta aquí...,Sin comentarios todavía.,Enviar,Like,Anular like,Responder,Anular respuesta,Comentarios,Recargar,Cargar Más...,Previsualizar,Emoji,Subir Imagen,segundos atrás,minutos atrás,horas atrás,días atrás,justo ahora,Subiendo,Iniciar sesión,cerrar sesión,Admin,Fijado,Palabras,Por favor escriba entre $0 y $1 palabras!
 El número actual de palabras: $2,Anónimo,Enanos,Hobbits,Ents,Magos,Elfos,Maiar,GIF,Buscar GIF,Perfil,Aprobado,Esperando,Spam,Desfijar,Más antiguos,Más recientes,Más vistos,¿Qué piensas?,Tu comentario está en revisión y actualmente solo es visible para ti. Será visible públicamente después de la aprobación.,Suscribirse a los comentarios de esta publicación,Suscribirse a los comentarios de este sitio,Suscribirse a las respuestas de tus comentarios`.split(`,`));
var Te = J(`Pseudo,Le pseudo ne peut pas faire moins de 3 octets.,E-mail,Veuillez confirmer votre adresse e-mail.,Site Web,Optionnel,Commentez ici...,Aucun commentaire pour l'instant.,Envoyer,J'aime,Annuler le j'aime,Répondre,Annuler la réponse,Commentaires,Actualiser,Charger plus...,Aperçu,Emoji,Télécharger une image,Il y a quelques secondes,Il y a quelques minutes,Il y a quelques heures,Il y a quelques jours,À l'instant,Téléchargement en cours,Connexion,Déconnexion,Admin,Épinglé,Mots,Veuillez saisir des commentaires entre $0 et $1 mots !
 Nombre actuel de mots : $2,Anonyme,Nains,Hobbits,Ents,Mages,Elfes,Maïar,GIF,Rechercher un GIF,Profil,Approuvé,En attente,Indésirable,Détacher,Le plus ancien,Dernier,Le plus populaire,Qu'en pensez-vous ?,Votre commentaire est en cours de révision et n'est actuellement visible que par vous. Il sera visible publiquement après approbation.,S’abonner aux commentaires de ce post,S’abonner aux commentaires de ce site,S’abonner aux réponses de vos commentaires`.split(`,`));
var Ee = J(`Nama Panggilan,Nama Panggilan tidak boleh kurang dari 3 bita.,E-Mail,Silakan konfirmasi alamat email Anda.,Situs Web,Opsional,Tulis komentar di sini...,Belum ada komentar.,Kirim,Suka,Batal suka,Balas,Batal balas,Komentar,Segarkan,Muat Lebih Banyak...,Pratinjau,Emoji,Unggah Gambar,detik yang lalu,menit yang lalu,jam yang lalu,hari yang lalu,baru saja,Mengunggah,Masuk,Keluar,Admin,Sematkan,Kata,Silakan masukkan komentar antara $0 dan $1 kata!
 Jumlah kata saat ini: $2,Anonim,Kurcaci,Hobbit,Ent,Penyihir,Peri,Maiar,GIF,Cari GIF,Profil,Disetujui,Menunggu,Spam,Lepas Sematan,Terlama,Terbaru,Terpopuler,Apa yang Anda pikirkan?,Komentar Anda sedang ditinjau dan saat ini hanya terlihat oleh Anda. Komentar akan terlihat secara publik setelah disetujui.,Berlangganan komentar di postingan ini,Berlangganan komentar di situs ini,Berlangganan balasan komentar Anda`.split(`,`));
var De = J(`Nickname,Il nickname non può avere meno di 3 caratteri.,E-mail,Per favore conferma il tuo indirizzo e-mail.,Sito web,Facoltativo,Scrivi un commento...,Ancora nessun commento.,Invia,Mi piace,Annulla mi piace,Rispondi,Annulla risposta,Commenti,Aggiorna,Carica altri...,Anteprima,Emoji,Carica immagine,secondi fa,minuti fa,ore fa,giorni fa,adesso,Caricamento in corso...,Accedi,Esci,Admin,In evidenza,Parole,Inserisci un commento tra $0 e $1 parole!
 Numero attuale di parole: $2,Anonimo,Nano,Hobbit,Ent,Mago,Elfo,Maiar,GIF,Cerca GIF,Profilo,Approvato,In attesa,Spam,Rimuovi evidenza,Più vecchi,Più recenti,Più popolari,Cosa ne pensi?,Il tuo commento è in fase di revisione ed è attualmente visibile solo a te. Sarà visibile pubblicamente dopo l'approvazione.,Iscriviti ai commenti di questo post,Iscriviti ai commenti di questo sito,Iscriviti alle risposte dei tuoi commenti`.split(`,`));
var Oe = J(`ニックネーム,3バイト以上のニックネームをご入力ください.,メールアドレス,メールアドレスをご確認ください.,サイト,オプション,ここにコメント,コメントしましょう~,提出する,Like,Cancel like,返信する,キャンセル,コメント,更新,さらに読み込む,プレビュー,絵文字,画像をアップロード,秒前,分前,時間前,日前,たっだ今,アップロード,ログインする,ログアウト,管理者,トップに置く,ワード,コメントは $0 から $1 ワードの間でなければなりません!
 現在の単語番号: $2,匿名,うえにん,なかにん,しもおし,特にしもおし,かげ,なぬし,GIF,探す GIF,個人情報,承認済み,待っている,スパム,べたつかない,逆順,正順,人気順,どう思いますか？,あなたのコメントは審査中で、現在はあなただけに表示されています。承認後に公開されます。,この投稿のコメントを購読する,このサイトのコメントを購読する,あなたのコメントの返信を購読する`.split(`,`));
var ke = J(`닉네임,닉네임은 3바이트 이상이어야 합니다.,이메일,이메일 주소를 확인해 주세요.,웹사이트,선택사항,여기에 댓글을 입력하세요...,아직 댓글이 없습니다.,제출,좋아요,좋아요 취소,답글,답글 취소,댓글,새로고침,더 보기...,미리보기,이모지,이미지 업로드,초 전,분 전,시간 전,일 전,방금 전,업로드 중,로그인,로그아웃,관리자,고정,글자 수,댓글은 $0자에서 $1자 사이여야 합니다!
현재 글자 수: $2,익명,난쟁이,호빗,엔트,마법사,엘프,마이아,GIF,GIF 검색,프로필,승인됨,대기 중,스팸,고정 해제,오래된 순,최신 순,인기순,어떻게 생각하시나요?,댓글이 검토 중이며 현재 본인만 볼 수 있습니다. 승인 후 공개됩니다.,이 게시물의 댓글 구독,이 사이트의 댓글 구독,댓글에 대한 답글 구독`.split(`,`));
var Ae = J(`Apelido(Apelido não pode ser menor que 3 bytes.(E-Mail(Por favor, confirme seu endereço de e-mail.(Website(Opcional(Comente aqui...(Nenhum comentário, ainda.(Enviar(Like(Cancel like(Responder(Cancelar resposta(Comentários(Refrescar(Carregar Mais...(Visualizar(Emoji(Enviar Imagem(segundos atrás(minutos atrás(horas atrás(dias atrás(agora mesmo(Enviando(Entrar(Sair(Admin(Sticky(Palavras(Favor enviar comentário com $0 a $1 palavras!
 Número de palavras atuais: $2(Anônimo(Dwarves(Hobbits(Ents(Wizards(Elves(Maiar(GIF(Pesquisar GIF(informação pessoal(Aprovado(Espera(Spam(Unsticky(Mais velho(Mais recentes(Mais quente(O que você acha?(Seu comentário está em revisão e atualmente está visível apenas para você. Ele será visível publicamente após a aprovação.(Assinar os comentários deste post(Assinar os comentários deste site(Assinar as respostas dos seus comentários`.split(`(`));
var je = J(`Псевдоним(Никнейм не может быть меньше 3 байт.(Эл. адрес(Пожалуйста, подтвердите адрес вашей электронной почты.(Веб-сайт(Необязательный(Комментарий здесь...(Пока нет комментариев.(Отправить(Like(Cancel like(Отвечать(Отменить ответ(Комментарии(Обновить(Загрузи больше...(Превью(эмодзи(Загрузить изображение(секунд назад(несколько минут назад(несколько часов назад(дней назад(прямо сейчас(Загрузка(Авторизоваться(Выход из системы(Админ(Липкий(Слова(Пожалуйста, введите комментарии от $0 до $1 слов!
Номер текущего слова: $2(Анонимный(Dwarves(Hobbits(Ents(Wizards(Elves(Maiar(GIF(Поиск GIF(Персональные данные(Одобренный(Ожидающий(Спам(Нелипкий(самый старый(последний(самый горячий(Что вы думаете?(Ваш комментарий находится на рассмотрении и в настоящее время виден только вам. После одобрения он станет общедоступным.(Подписаться на комментарии к этому посту(Подписаться на комментарии этого сайта(Подписаться на ответы ваших комментариев`.split(`(`));
var Me = J(`Tên,Tên không được nhỏ hơn 3 ký tự.,E-Mail,Vui lòng xác nhập địa chỉ email của bạn.,Website,Tùy chọn,Hãy bình luận có văn hoá!,Chưa có bình luận,Gửi,Thích,Bỏ thích,Trả lời,Hủy bỏ,bình luận,Làm mới,Tải thêm...,Xem trước,Emoji,Tải lên hình ảnh,giây trước,phút trước,giờ trước,ngày trước,Vừa xong,Đang tải lên,Đăng nhập,đăng xuất,Quản trị viên,Dính,từ,Bình luận phải có độ dài giữa $0 và $1 từ!
 Số từ hiện tại: $2,Vô danh,Người lùn,Người tí hon,Thần rừng,Pháp sư,Tiên tộc,Maiar,Ảnh GIF,Tìm kiếm ảnh GIF,thông tin cá nhân,Đã được phê duyệt,Đang chờ đợi,Thư rác,Không dính,lâu đời nhất,muộn nhất,nóng nhất,What do you think?,Bình luận của bạn đang được xem xét và hiện chỉ hiển thị với bạn. Nó sẽ được công khai sau khi được phê duyệt.,Đăng ký nhận xét của bài viết này,Đăng ký nhận xét của trang web này,Đăng ký nhận xét của bạn`.split(`,`));
var Ne = J(`昵称,昵称不能少于3个字符,邮箱,请填写正确的邮件地址,网址,可选,欢迎评论,来发评论吧~,提交,喜欢,取消喜欢,回复,取消回复,评论,刷新,加载更多...,预览,表情,上传图片,秒前,分钟前,小时前,天前,刚刚,正在上传,登录,退出,博主,置顶,字,评论字数应在 $0 到 $1 字之间！
当前字数：$2,匿名,潜水,冒泡,吐槽,活跃,话痨,传说,表情包,搜索表情包,个人资料,通过,待审核,垃圾,取消置顶,按倒序,按正序,按热度,你认为这篇文章怎么样？,评论正在审核中，当前仅自己可见，审核通过后公开可见。,订阅本文评论,订阅本站评论,订阅你的评论回复`.split(`,`));
var Q = { zh: Ne, "zh-cn": Ne, "zh-tw": J(`暱稱,暱稱不能少於3個字元,郵箱,請填寫正確的郵件地址,網址,可選,歡迎留言,來發留言吧~,送出,喜歡,取消喜歡,回覆,取消回覆,留言,重整,載入更多...,預覽,表情,上傳圖片,秒前,分鐘前,小時前,天前,剛剛,正在上傳,登入,登出,管理者,置頂,字,留言字數應在 $0 到 $1 字之間！
目前字數：$2,匿名,潛水,冒泡,吐槽,活躍,多話,傳說,表情包,搜尋表情包,個人資料,通過,待審核,垃圾,取消置頂,最早,最新,熱門,你認為這篇文章怎麼樣？,您的評論正在審核中，目前僅您可見。審核通過後將公開顯示。,訂閱此文章的評論,訂閱本站的評論,訂閱您的評論回覆`.split(`,`)), en: X, "en-us": X, fr: Te, "fr-fr": Te, id: Ee, "id-id": Ee, it: De, "it-it": De, jp: Oe, "jp-jp": Oe, ko: ke, "ko-kr": ke, "pt-br": Ae, ru: je, "ru-ru": je, vi: Me, "vi-vn": Me, de: Y, es: Z2, "es-mx": Z2 };
var Pe = (e) => Q[e.toLowerCase()] ?? Q[`en-us`];
var Fe = (e) => Object.keys(Q).includes(e.toLowerCase()) ? e : `en-US`;
var Ie = { latest: `insertedAt_desc`, oldest: `insertedAt_asc`, hottest: `like_desc` };
var Le = Object.keys(Ie);
var Re = Symbol(`waline-config`);
var ze = (e) => {
  try {
    return decodeURI(e);
  } catch {
    return e;
  }
};
var Be = (e = ``) => e.replace(/\/$/u, ``);
var Ve = (e) => /^(https?:)?\/\//u.test(e);
var He = (e) => {
  let t = Be(e);
  return Ve(t) ? t : `https://${t}`;
};
var Ue = (e) => Array.isArray(e) ? e : typeof e == `number` && e > 0 ? [0, e] : false;
var $ = (e, t) => e == null || e === true ? t : e === false ? null : e;
var We = ({ serverURL: e, path: t = location.pathname, lang: n = typeof navigator > `u` ? `en-US` : navigator.language, locale: r2, meta: i2 = [`nick`, `mail`, `link`], requiredMeta: a2 = [], dark: o2 = false, pageSize: s2 = 10, wordLimit: c2, noCopyright: l = false, noRss: u = false, login: d2 = `enable`, recaptchaV3Key: f = ``, turnstileKey: p = ``, commentSorting: m = `latest`, emoji: h2 = V, imageUploader: g, highlighter: _, texRenderer: v, search: y, reaction: b, ...x }) => ({ serverURL: He(e), path: ze(t), lang: Fe(n), locale: { ...Pe(Fe(n)), ...typeof r2 == `object` ? r2 : {} }, wordLimit: Ue(c2), meta: B(i2), requiredMeta: B(a2), dark: o2, pageSize: s2, commentSorting: m, login: d2, noCopyright: l, noRss: u, recaptchaV3Key: f, turnstileKey: p, ...x, reaction: b === true ? Se : b || null, imageUploader: $(g, H), highlighter: $(_, we), texRenderer: $(v, U), emoji: $(h2, V), search: $(y, W(n)) });
var Ge = (e) => typeof e == `string`;
var Ke = `{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bg-color:#1e1e1e;--waline-bg-color-light:#272727;--waline-bg-color-hover: #444;--waline-border-color:#333;--waline-disable-bg-color:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bg-color:#272727;--waline-info-color:#666}`;
var qe = (e) => Ge(e) ? e === `auto` ? `@media(prefers-color-scheme:dark){body${Ke}}` : `${e}${Ke}` : e === true ? `:root${Ke}` : ``;
var Je = (e, t) => {
  let n = e.toString();
  for (; n.length < t; ) n = `0${n}`;
  return n;
};
var Ye = (e) => {
  let t = Je(e.getDate(), 2), n = Je(e.getMonth() + 1, 2);
  return `${Je(e.getFullYear(), 2)}-${n}-${t}`;
};
var Xe = (e, t, n) => {
  if (!e) return ``;
  let r2 = Ge(e) ? new Date(e.includes(` `) ? e.replaceAll(`-`, `/`) : e) : e, i2 = t.getTime() - r2.getTime(), a2 = Math.floor(i2 / (24 * 3600 * 1e3));
  if (a2 === 0) {
    let e2 = i2 % (24 * 3600 * 1e3), t2 = Math.floor(e2 / (3600 * 1e3));
    if (t2 === 0) {
      let t3 = e2 % (3600 * 1e3), r3 = Math.floor(t3 / (60 * 1e3));
      if (r3 === 0) {
        let e3 = t3 % (60 * 1e3);
        return `${Math.round(e3 / 1e3)} ${n.seconds}`;
      }
      return `${r3} ${n.minutes}`;
    }
    return `${t2} ${n.hours}`;
  }
  return a2 < 0 ? n.now : a2 < 8 ? `${a2} ${n.days}` : Ye(r2);
};
var Ze = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/u;
var Qe = (e) => Ze.test(e);
var $e = useStorage(`WALINE_EMOJI`, {});
var et = (e) => /@[0-9]+\.[0-9]+\.[0-9]+/u.test(e);
var tt = (e) => {
  let t = et(e);
  if (t) {
    let t2 = $e.value[e];
    if (t2) return Promise.resolve(t2);
  }
  return fetch(`${e}/info.json`).then((e2) => e2.json()).then((n) => {
    let r2 = { folder: e, ...n };
    return t && ($e.value[e] = r2), r2;
  });
};
var nt = (e, t = ``, n = ``, r2 = ``) => `${t ? `${t}/` : ``}${n}${e}${r2 ? `.${r2}` : ``}`;
var rt = (e) => Promise.all(e ? e.map((e2) => Ge(e2) ? tt(Be(e2)) : Promise.resolve(e2)) : []).then((e2) => {
  let t = { tabs: [], map: {} };
  return e2.forEach((e3) => {
    let { name: n, folder: r2, icon: i2, prefix: a2 = ``, type: o2, items: s2 } = e3;
    t.tabs.push({ name: n, icon: nt(i2, r2, a2, o2), items: s2.map((e4) => {
      let n2 = `${a2}${e4}`;
      return t.map[n2] = nt(e4, r2, a2, o2), n2;
    }) });
  }), t;
});
var it = (e) => {
  let t = [...e].find((e2) => e2.type.includes(`image`));
  return t ? t.getAsFile() : null;
};
var at = /\$.*?\$/u;
var ot = /^\$(.*?)\$/u;
var st = /^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/u;
var ct = (e) => [{ name: `blockMath`, level: `block`, tokenizer(t) {
  let n = st.exec(t);
  if (n != null) return { type: `html`, raw: n[0], text: e(true, n[1]) };
} }, { name: `inlineMath`, level: `inline`, start(e2) {
  let t = e2.search(at);
  return t === -1 ? e2.length : t;
}, tokenizer(t) {
  let n = ot.exec(t);
  if (n != null) return { type: `html`, raw: n[0], text: e(false, n[1]) };
} }];
var lt = (e = ``, t = {}) => e.replaceAll(/:(.+?):/gu, (e2, n) => t[n] ? `<img class="wl-emoji" src="${t[n]}" alt="${n}">` : e2);
var ut = (e, { emojiMap: t, highlighter: n, texRenderer: r2 }) => {
  let i2 = new Z();
  if (i2.setOptions({ breaks: true }), n && i2.use(markedHighlight({ highlight: n })), r2) {
    let e2 = ct(r2);
    i2.use({ extensions: e2 });
  }
  return i2.parse(lt(e, t));
};
var dt = (e) => e.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu);
var ft = (e) => e.match(/[\u4E00-\u9FD5]/gu);
var pt = (e) => {
  var _a, _b;
  return (((_a = dt(e)) == null ? void 0 : _a.reduce((e2, t) => e2 + ([``, `,`, `.`].includes(t.trim()) ? 0 : t.trim().split(/\s+/u).length), 0)) ?? 0) + (((_b = ft(e)) == null ? void 0 : _b.length) ?? 0);
};
var mt = async () => {
  let { userAgentData: e } = navigator, t = navigator.userAgent;
  if ((e == null ? void 0 : e.platform) !== `Windows`) return t;
  let { platformVersion: n } = await e.getHighEntropyValues([`platformVersion`]);
  return n && Number.parseInt(n.split(`.`)[0], 10) >= 13 && (t = t.replace(`Windows NT 10.0`, `Windows NT 11.0`)), t;
};
var ht = `3.15.2`;
var gt = ({ size: e }) => h(`svg`, { class: `wl-close-icon`, viewBox: `0 0 1024 1024`, width: e, height: e }, [h(`path`, { d: `M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z`, fill: `currentColor` }), h(`path`, { d: `m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z`, fill: `#888` })]);
var _t = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, h(`path`, { d: `m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z`, fill: `red` }));
var vt = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, h(`path`, { d: `M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z`, fill: `currentColor` }));
var yt = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, [h(`path`, { d: `M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z`, fill: `currentColor` }), h(`path`, { d: `M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z`, fill: `currentColor` })]);
var bt = ({ active: e = false }) => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, [h(`path`, { d: `M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z${e ? `` : `M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z`}`, fill: e ? `red` : `currentColor` })]);
var xt = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, [h(`path`, { d: `M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0`, fill: `currentColor` }), h(`path`, { d: `M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0`, fill: `currentColor` })]);
var St = () => h(`svg`, { width: `16`, height: `16`, ariaHidden: `true` }, h(`path`, { d: `M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z`, fill: `currentColor` }));
var Ct = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, h(`path`, { d: `M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z`, fill: `currentColor` }));
var wt = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, h(`path`, { d: `M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z`, fill: `currentColor` }));
var Tt = () => h(`svg`, { class: `verified-icon`, viewBox: `0 0 1024 1024`, width: `14`, height: `14` }, h(`path`, { d: `m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z`, fill: `#27ae60` }));
var Et = () => h(`svg`, { class: `administrator-icon`, viewBox: `0 0 1024 1024`, width: `14`, height: `14` }, [h(`path`, { d: `M461.6 129.56C489.6 105.96 534.8 105.96 562.4 129.56L625.6 183.96C637.6 194.36 660.4 202.76 676 202.76H744C786.4 202.76 821.2 237.56 821.2 279.96V347.96C821.2 363.96 829.6 386.36 840 398.36L894.4 461.56C918 489.16 918 534.76 894.8 562.36L840.4 625.56C830 637.56 821.6 660.36 821.6 675.96V743.96C821.6 786.36 786.8 821.16 744.4 821.16H676.4C660.4 821.16 638 829.56 626 839.96L562.8 894.36C534.8 917.96 489.6 917.96 462 894.36L398.8 839.96C386.8 829.56 364 821.16 348.4 821.16H279.2C236.8 821.16 202 786.36 202 743.96V675.56C201.999 659.96 193.6 637.56 183.6 625.56L129.6 561.96C106.4 534.36 106.4 489.56 129.6 461.96L183.6 398.36C193.6 386.359 202 363.959 202 348.36V279.96C202 237.56 236.8 202.76 279.2 202.76H348.4C364 202.76 386.8 194.36 398.8 184.36L461.6 129.56ZM549.567 331.896C530.047 303.082 486.645 306.12 471.433 337.412L442.175 396.526C435.587 409.848 422.856 419.097 408.146 421.226L342.706 430.726C340.776 431 338.884 431.397 336.993 431.946C303.482 441.361 292.756 483.493 317.671 507.812L364.975 553.96C375.623 564.321 380.507 579.299 377.991 593.954L366.917 659.102C366.595 661.03 366.355 662.967 366.279 664.923C364.906 699.688 401.683 722.937 432.514 706.738L491.05 675.966C504.217 669.068 519.954 669.069 533.121 675.966L591.675 706.738C593.406 707.645 595.174 708.432 597.028 709.104C629.666 721.205 663.139 693.382 657.273 659.102L646.069 593.954C643.42 579.176 648.24 564.083 659.001 553.6L706.315 507.461C707.687 506.118 708.994 504.66 710.215 503.127C731.779 475.809 715.737 435.41 681.281 430.365L615.839 420.874C601.13 418.745 588.4 409.486 581.821 396.174L552.562 337.052C551.644 335.284 550.674 333.551 549.567 331.896Z`, fill: `#f59831` })]);
var Dt = ({ size: e = 100 }) => h(`svg`, { width: e, height: e, viewBox: `0 0 100 100`, preserveAspectRatio: `xMidYMid` }, h(`circle`, { cx: 50, cy: 50, fill: `none`, stroke: `currentColor`, strokeWidth: `4`, r: `40`, "stroke-dasharray": `85 30` }, h(`animateTransform`, { attributeName: `transform`, type: `rotate`, repeatCount: `indefinite`, dur: `1s`, values: `0 50 50;360 50 50`, keyTimes: `0;1` })));
var Ot = () => h(`svg`, { width: 24, height: 24, fill: `currentcolor`, viewBox: `0 0 24 24` }, [h(`path`, { style: `transform: translateY(0.5px)`, d: `M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z` }), h(`path`, { d: `M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z` })]);
var kt = () => h(`svg`, { width: `16`, height: `16`, viewBox: `0 0 24 24` }, h(`g`, { transform: `translate(0 -1028.4)` }, h(`g`, {}, [h(`path`, { d: `m4 1031.4c-1.1046 0-2 0.9-2 2v16c0 1.1 0.8954 2 2 2h16c1.105 0 2-0.9 2-2v-16c0-1.1-0.895-2-2-2h-16z`, fill: `#d35400` }), h(`path`, { d: `m4 2c-1.1046 0-2 0.8954-2 2v16c0 1.105 0.8954 2 2 2h16c1.105 0 2-0.895 2-2v-16c0-1.1046-0.895-2-2-2h-16z`, transform: `translate(0 1028.4)`, fill: `#e67e22` }), h(`path`, { d: `m5 1034.4v2.3c6.443 0 11.667 5.2 11.667 11.7h2.333c0-7.8-6.268-14-14-14zm0 4.6v2.4c3.866 0 7 3.1 7 7h2.333c0-5.2-4.178-9.4-9.333-9.4zm2.0417 5.3c-1.1276 0-2.0417 0.9-2.0417 2s0.9141 2.1 2.0417 2.1c1.1275 0 2.0416-1 2.0416-2.1s-0.9141-2-2.0416-2z`, fill: `#d35400` }), h(`path`, { d: `m5 1033.4v2.3c6.443 0 11.667 5.2 11.667 11.7h2.333c0-7.8-6.268-14-14-14zm0 4.6v2.4c3.866 0 7 3.1 7 7h2.333c0-5.2-4.178-9.4-9.333-9.4zm2.0417 5.3c-1.1276 0-2.0417 0.9-2.0417 2s0.9141 2.1 2.0417 2.1c1.1275 0 2.0416-1 2.0416-2.1s-0.9141-2-2.0416-2z`, fill: `#ecf0f1` })])));
var At = () => h(`svg`, { fill: `currentColor`, width: `24`, height: `24`, viewBox: `-3 0 19 19`, class: `cf-icon-svg` }, h(`path`, { d: `M.926 12.818a1.403 1.403 0 1 1 0 1.984 1.402 1.402 0 0 1 0-1.984zm10.531 2.357a1.03 1.03 0 0 1-1.029-1.03 8.775 8.775 0 0 0-.694-3.438A8.826 8.826 0 0 0 1.591 5.31a1.03 1.03 0 1 1 0-2.059 10.817 10.817 0 0 1 4.24.857 10.893 10.893 0 0 1 3.463 2.334 10.867 10.867 0 0 1 3.19 7.703 1.027 1.027 0 0 1-1.027 1.029zm-4.538 0a1.03 1.03 0 0 1-1.029-1.03 4.297 4.297 0 0 0-4.299-4.298 1.03 1.03 0 0 1 0-2.059 6.362 6.362 0 0 1 5.857 3.883 6.298 6.298 0 0 1 .5 2.475 1.03 1.03 0 0 1-1.029 1.029z` }));
var jt = { key: 0, class: `wl-reaction` };
var Mt = [`textContent`];
var Nt = { class: `wl-reaction-list` };
var Pt = [`onClick`];
var Ft = { class: `wl-reaction-img` };
var It = [`src`, `alt`];
var Lt = [`textContent`];
var Rt = [`textContent`];
var zt = defineComponent({ __name: `ArticleReaction`, setup(o2) {
  let s2 = he(), c2 = inject(Re), l = ref(-1), d2 = ref([]), f = computed(() => c2.value.locale), m = computed(() => {
    let { reaction: e } = c2.value;
    return (e == null ? void 0 : e.length) ? e : null;
  }), h2 = computed(() => {
    var _a;
    let { path: e } = c2.value;
    return ((_a = m.value) == null ? void 0 : _a.map((t, n) => ({ icon: t, desc: f.value[`reaction${n}`], active: s2.value[e] === n }))) ?? null;
  }), y, b = async () => {
    let { serverURL: e, lang: t, path: n } = c2.value;
    if (!m.value) return;
    let r2 = new AbortController();
    y = r2.abort.bind(r2);
    let [i2] = await r({ serverURL: e, lang: t, paths: [n], type: m.value.map((e2, t2) => `reaction${t2}`), signal: r2.signal });
    d2.value = m.value.map((e2, t2) => i2[`reaction${t2}`]);
  }, C = async (e) => {
    if (l.value !== -1) return;
    let { serverURL: t, lang: n, path: r2 } = c2.value, i2 = s2.value[r2];
    l.value = e, i2 != null && (await i({ serverURL: t, lang: n, path: r2, type: `reaction${i2}`, action: `desc` }), d2.value[i2] = Math.max(d2.value[i2] - 1, 0)), i2 !== e && (await i({ serverURL: t, lang: n, path: r2, type: `reaction${e}` }), d2.value[e] = (d2.value[e] || 0) + 1), i2 === e ? delete s2.value[r2] : s2.value[r2] = e, l.value = -1;
  };
  return onMounted(() => {
    watchImmediate(() => [c2.value.serverURL, c2.value.path], () => b());
  }), onUnmounted(() => {
    y == null ? void 0 : y();
  }), (t, o3) => h2.value ? (openBlock(), createElementBlock(`div`, jt, [createBaseVNode(`div`, { class: `wl-reaction-title`, textContent: toDisplayString(f.value.reactionTitle) }, null, 8, Mt), createBaseVNode(`ul`, Nt, [(openBlock(true), createElementBlock(Fragment, null, renderList(h2.value, ({ active: e, icon: t2, desc: r2 }, o4) => (openBlock(), createElementBlock(`li`, { key: o4, class: normalizeClass([`wl-reaction-item`, { active: e }]), onClick: (e2) => C(o4) }, [createBaseVNode(`div`, Ft, [createBaseVNode(`img`, { src: t2, alt: r2 }, null, 8, It), l.value === o4 ? (openBlock(), createBlock(unref(Dt), { key: 0, class: `wl-reaction-loading` })) : (openBlock(), createElementBlock(`div`, { key: 1, class: `wl-reaction-votes`, textContent: toDisplayString(d2.value[o4] || 0) }, null, 8, Lt))]), createBaseVNode(`div`, { class: `wl-reaction-text`, textContent: toDisplayString(r2) }, null, 8, Rt)], 10, Pt))), 128))])])) : createCommentVNode(`v-if`, true);
} });
var Bt = [`data-index`];
var Vt = [`src`, `title`, `onClick`];
var Ht = defineComponent({ __name: `ImageWall`, props: { items: { default: () => [] }, columnWidth: { default: 300 }, gap: { default: 0 } }, emits: [`insert`], setup(t) {
  let o2 = null, s2 = useTemplateRef(`wall`), c2 = ref({}), l = ref([]), u = () => {
    let e = Math.floor((s2.value.getBoundingClientRect().width + t.gap) / (t.columnWidth + t.gap));
    return e > 0 ? e : 1;
  }, d2 = (e) => Array.from({ length: e }, () => []), p = async (e) => {
    var _a;
    if (e >= t.items.length) return;
    await nextTick();
    let n = [...((_a = s2.value) == null ? void 0 : _a.children) ?? []].reduce((e2, t2) => t2.getBoundingClientRect().height < e2.getBoundingClientRect().height ? t2 : e2);
    l.value[Number(n.dataset.index)].push(e), await p(e + 1);
  }, _ = async (e = false) => {
    if (l.value.length === u() && !e) return;
    l.value = d2(u());
    let { scrollY: t2 } = window;
    await p(0), window.scrollTo({ top: t2 });
  }, y = (e) => {
    c2.value[e.target.src] = true;
  };
  return onMounted(() => {
    _(true), o2 = new ResizeObserver(() => {
      _();
    }), o2.observe(s2.value), watch(() => [t.items], () => {
      c2.value = {}, _(true);
    }), watch(() => [t.columnWidth, t.gap], () => {
      _();
    });
  }), onBeforeUnmount(() => {
    o2.unobserve(s2.value);
  }), (o3, u2) => (openBlock(), createElementBlock(`div`, { ref_key: `wall`, ref: s2, class: `wl-gallery`, style: normalizeStyle({ gap: `${t.gap}px` }) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(l.value, (s3, l2) => (openBlock(), createElementBlock(`div`, { key: l2, class: `wl-gallery-column`, "data-index": l2, style: normalizeStyle({ gap: `${t.gap}px` }) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(s3, (s4) => (openBlock(), createElementBlock(Fragment, { key: s4 }, [c2.value[t.items[s4].src] ? createCommentVNode(`v-if`, true) : (openBlock(), createBlock(unref(Dt), { key: 0, size: 36, style: { margin: `20px auto` } })), createBaseVNode(`img`, { class: `wl-gallery-item`, src: t.items[s4].src, title: t.items[s4].title, loading: `lazy`, onLoad: y, onClick: (e) => o3.$emit(`insert`, `![](${t.items[s4].src})`) }, null, 40, Vt)], 64))), 128))], 12, Bt))), 128))], 4));
} });
var Ut = { key: 0, class: `wl-login-info` };
var Wt = { class: `wl-avatar` };
var Gt = [`title`];
var Kt = [`title`];
var qt = [`src`];
var Jt = [`title`, `textContent`];
var Yt = { class: `wl-panel` };
var Xt = [`for`, `textContent`];
var Zt = [`id`, `onUpdate:modelValue`, `name`, `type`];
var Qt = [`placeholder`];
var $t = { class: `wl-preview` };
var en = [`innerHTML`];
var tn = { class: `wl-footer` };
var nn = { class: `wl-actions` };
var rn = { href: `https://guides.github.com/features/mastering-markdown/`, title: `Markdown Guide`, "aria-label": `Markdown is supported`, class: `wl-action`, target: `_blank`, rel: `noopener noreferrer` };
var an = [`title`];
var on = [`title`];
var sn = [`title`, `aria-label`];
var cn = [`title`];
var ln = { class: `wl-info` };
var un = { class: `wl-text-number` };
var dn = { key: 0 };
var fn = [`textContent`];
var pn = [`textContent`];
var mn = [`disabled`];
var hn = [`placeholder`];
var gn = { key: 1, class: `wl-loading` };
var _n = [`title`, `onClick`, `onMouseenter`];
var vn = [`src`, `alt`];
var yn = [`src`];
var bn = { key: 0, class: `wl-tabs` };
var xn = [`onClick`];
var Sn = [`src`, `alt`, `title`];
var Cn = [`title`];
var wn = defineComponent({ __name: `CommentBox`, props: { edit: {}, rootId: {}, replyId: {}, replyUser: {} }, emits: [`log`, `cancelEdit`, `cancelReply`, `submit`], setup(c2, { emit: l }) {
  let h2 = c2, _ = l, y = inject(Re), C = pe(), M = fe(), N = be(), P = ref({}), ne = useTemplateRef(`textarea`), ie = useTemplateRef(`image-uploader`), ae = useTemplateRef(`emoji-button`), oe = useTemplateRef(`emoji-popup`), ce = useTemplateRef(`gif-button`), ue2 = useTemplateRef(`gif-popup`), I = useTemplateRef(`gif-search`), L = ref({ tabs: [], map: {} }), me2 = ref(0), R2 = ref(false), z2 = ref(``), he2 = ref({}), ge2, ye2 = (e, t) => {
    clearTimeout(ge2), z2.value = t;
    let n = e.currentTarget, r2 = oe.value;
    if (n && r2) {
      let e2 = n.getBoundingClientRect(), t2 = r2.getBoundingClientRect();
      he2.value = { left: `${e2.left - t2.left + e2.width / 2}px`, top: `${e2.top - t2.top}px`, transform: `translate(-50%, -100%)` };
    }
  }, xe2 = () => {
    ge2 = setTimeout(() => {
      z2.value = ``;
    }, 50);
  }, B2 = ref(false), V2 = ref(false), Se2 = ref(``), H2 = ref(0), U2 = reactive({ loading: true, list: [] }), W2 = ref(0), G2 = ref(false), Ce2 = ref(``), K2 = ref(false), we2 = ref(false), q2 = computed(() => y.value.locale), J2 = computed(() => !!N.value.token), Y2 = computed(() => y.value.imageUploader != null), X2 = (e) => {
    let t = ne.value, n = t.selectionStart, r2 = t.selectionEnd || 0, { scrollTop: i2 } = t;
    C.value = t.value.slice(0, n) + e + t.value.slice(r2), t.focus(), t.selectionStart = n + e.length, t.selectionEnd = n + e.length, t.scrollTop = i2;
  }, Z3 = async (e) => {
    let t = `![${y.value.locale.uploading} ${e.name}]()`;
    X2(t), K2.value = true;
    try {
      let n = await y.value.imageUploader(e);
      C.value = C.value.replace(t, `\r
![${e.name}](${n})`);
    } catch (e2) {
      alert(e2.message), C.value = C.value.replace(t, ``);
    } finally {
      K2.value = false;
    }
  }, Te2 = (e) => {
    var _a;
    if ((_a = e.dataTransfer) == null ? void 0 : _a.items) {
      let t = it(e.dataTransfer.items);
      t && Y2.value && (Z3(t), e.preventDefault());
    }
  }, Ee2 = (e) => {
    if (e.clipboardData) {
      let t = it(e.clipboardData.items);
      t && Y2.value && Z3(t);
    }
  }, De2 = () => {
    let e = ie.value;
    e.files && Y2.value && Z3(e.files[0]).then(() => {
      e.value = ``;
    });
  }, Oe2 = async () => {
    var _a;
    let { serverURL: e, lang: t, login: n, wordLimit: r2, requiredMeta: i2, recaptchaV3Key: a2, turnstileKey: o2 } = y.value, s2 = { comment: Ce2.value, nick: M.value.nick, mail: M.value.mail, link: M.value.link, url: y.value.path, ua: await mt() };
    if (!h2.edit) if (N.value.token) s2.nick = N.value.display_name, s2.mail = N.value.email, s2.link = N.value.url;
    else {
      if (n === `force`) return;
      if (i2.includes(`nick`) && !s2.nick) {
        P.value.nick.focus(), alert(q2.value.nickError);
        return;
      }
      if (i2.includes(`mail`) && !s2.mail || s2.mail && !Qe(s2.mail)) {
        P.value.mail.focus(), alert(q2.value.mailError);
        return;
      }
      s2.nick || (s2.nick = q2.value.anonymous);
    }
    if (!s2.comment) {
      ne.value.focus();
      return;
    }
    if (!G2.value) {
      alert(q2.value.wordHint.replace(`$0`, r2[0].toString()).replace(`$1`, r2[1].toString()).replace(`$2`, H2.value.toString()));
      return;
    }
    s2.comment = lt(s2.comment, L.value.map), h2.replyId && h2.rootId && (s2.pid = h2.replyId, s2.rid = h2.rootId, s2.at = h2.replyUser), K2.value = true;
    try {
      a2 && (s2.recaptchaV3 = await _e(a2).execute(`social`)), o2 && (s2.turnstile = await ve(o2).execute(`social`));
      let n2 = { serverURL: e, lang: t, token: N.value.token, comment: s2 }, r3 = await (h2.edit ? c({ objectId: h2.edit.objectId, ...n2 }) : o(n2));
      if (K2.value = false, r3.errmsg) {
        alert(r3.errmsg);
        return;
      }
      _(`submit`, r3.data), C.value = ``, Se2.value = ``, await nextTick(), h2.replyId && _(`cancelReply`), ((_a = h2.edit) == null ? void 0 : _a.objectId) && _(`cancelEdit`);
    } catch (e2) {
      K2.value = false, alert(e2.message);
    }
  }, ke2 = ({ key: e, ctrlKey: t, metaKey: n }) => {
    K2.value || (t || n) && e === `Enter` && Oe2();
  }, Ae2 = (e) => {
    e.preventDefault();
    let { lang: t, serverURL: n } = y.value;
    d({ serverURL: n, lang: t }).then((e2) => {
      N.value = e2, (e2.remember ? localStorage : sessionStorage).setItem(`WALINE_USER`, JSON.stringify(e2)), _(`log`);
    });
  }, je2 = () => {
    N.value = {}, localStorage.setItem(`WALINE_USER`, `null`), sessionStorage.setItem(`WALINE_USER`, `null`), _(`log`);
  }, Me2 = (e) => {
    var _a;
    e.preventDefault();
    let { lang: t, serverURL: n } = y.value, r2 = 1200, i2 = (window.innerWidth - r2) / 2, a2 = (window.innerHeight - 720) / 2, o2 = new URLSearchParams({ lng: t, token: N.value.token });
    (_a = window.open(`${n}/ui/profile?${o2.toString()}`, `_blank`, `width=${r2},height=720,left=${i2},top=${a2},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`)) == null ? void 0 : _a.postMessage({ type: `TOKEN`, data: N.value.token }, `*`);
  }, Ne2 = (e) => {
    var _a, _b, _c, _d;
    !((_a = ae.value) == null ? void 0 : _a.contains(e.target)) && !((_b = oe.value) == null ? void 0 : _b.contains(e.target)) && (R2.value = false), !((_c = ce.value) == null ? void 0 : _c.contains(e.target)) && !((_d = ue2.value) == null ? void 0 : _d.contains(e.target)) && (B2.value = false);
  }, Q2 = async (e) => {
    var _a;
    let { scrollTop: t, clientHeight: n, scrollHeight: r2 } = e.target, i2 = (n + t) / r2, a2 = y.value.search, o2 = ((_a = I.value) == null ? void 0 : _a.value) ?? ``;
    i2 < 0.9 || U2.loading || we2.value || (U2.loading = true, (a2.more && U2.list.length > 0 ? await a2.more(o2, U2.list.length) : await a2.search(o2)).length > 0 ? U2.list = [...U2.list, ...a2.more && U2.list.length > 0 ? await a2.more(o2, U2.list.length) : await a2.search(o2)] : we2.value = true, U2.loading = false, setTimeout(() => {
      e.target.scrollTop = t;
    }, 50));
  }, Pe2 = useDebounceFn((e) => {
    U2.list = [], we2.value = false, Q2(e);
  }, 300);
  return useEventListener(`click`, Ne2), useEventListener(`message`, ({ data: e }) => {
    (e == null ? void 0 : e.type) === `profile` && (N.value = { ...N.value, ...e.data }, [localStorage, sessionStorage].filter((e2) => e2.getItem(`WALINE_USER`)).forEach((e2) => {
      e2.setItem(`WALINE_USER`, JSON.stringify(N));
    }));
  }), watchImmediate([y, H2], ([e, t]) => {
    let { wordLimit: n } = e;
    n ? t < n[0] && n[0] !== 0 ? ([W2.value] = n, G2.value = false) : ([, W2.value] = n, G2.value = t <= n[1]) : (W2.value = 0, G2.value = true);
  }), watch(B2, async (e) => {
    var _a;
    if (!e) return;
    let t = y.value.search;
    I.value && (I.value.value = ``), U2.loading = true, U2.list = await (((_a = t.default) == null ? void 0 : _a.call(t)) ?? t.search(``)), U2.loading = false;
  }), onMounted(() => {
    var _a;
    ((_a = h2.edit) == null ? void 0 : _a.objectId) && (C.value = h2.edit.orig), watchImmediate(() => C.value, (e) => {
      let { highlighter: t, texRenderer: n } = y.value;
      Ce2.value = e, Se2.value = ut(e, { emojiMap: L.value.map, highlighter: t, texRenderer: n }), H2.value = pt(e), e ? autosize_esm_default(ne.value) : autosize_esm_default.destroy(ne.value);
    }), watchImmediate(() => y.value.emoji, async (e) => {
      L.value = await rt(e);
    });
  }), (t, l2) => {
    var _a, _b;
    return openBlock(), createElementBlock(`div`, { key: unref(N).token, class: `wl-comment` }, [unref(y).login !== `disable` && J2.value && !((_a = c2.edit) == null ? void 0 : _a.objectId) ? (openBlock(), createElementBlock(`div`, Ut, [createBaseVNode(`div`, Wt, [createBaseVNode(`button`, { type: `submit`, class: `wl-logout-btn`, title: q2.value.logout, onClick: je2 }, [createVNode(unref(gt), { size: 14 })], 8, Gt), createBaseVNode(`a`, { href: `#`, class: `wl-login-nick`, "aria-label": `Profile`, title: q2.value.profile, onClick: Me2 }, [createBaseVNode(`img`, { src: unref(N).avatar, alt: `avatar` }, null, 8, qt)], 8, Kt)]), createBaseVNode(`a`, { href: `#`, class: `wl-login-nick`, "aria-label": `Profile`, title: q2.value.profile, onClick: Me2, textContent: toDisplayString(unref(N).display_name) }, null, 8, Jt)])) : createCommentVNode(`v-if`, true), createBaseVNode(`div`, Yt, [unref(y).login !== `force` && unref(y).meta.length && !J2.value ? (openBlock(), createElementBlock(`div`, { key: 0, class: normalizeClass([`wl-header`, `item${unref(y).meta.length}`]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(y).meta, (e) => (openBlock(), createElementBlock(`div`, { key: e, class: `wl-header-item` }, [createBaseVNode(`label`, { for: `wl-${e}`, textContent: toDisplayString(q2.value[e] + (unref(y).requiredMeta.includes(e) || !unref(y).requiredMeta.length ? `` : `(${q2.value.optional})`)) }, null, 8, Xt), withDirectives(createBaseVNode(`input`, { id: `wl-${e}`, ref_for: true, ref: (t2) => {
      t2 && (P.value[e] = t2);
    }, "onUpdate:modelValue": (t2) => unref(M)[e] = t2, class: normalizeClass([`wl-input`, `wl-${e}`]), name: e, type: e === `mail` ? `email` : `text` }, null, 10, Zt), [[vModelDynamic, unref(M)[e]]])]))), 128))], 2)) : createCommentVNode(`v-if`, true), withDirectives(createBaseVNode(`textarea`, { id: `wl-edit`, ref: `textarea`, "onUpdate:modelValue": l2[0] || (l2[0] = (e) => isRef(C) ? C.value = e : null), class: `wl-editor`, placeholder: c2.replyUser ? `@${c2.replyUser}` : q2.value.placeholder, onKeydown: ke2, onDrop: Te2, onPaste: Ee2 }, null, 40, Qt), [[vModelText, unref(C)]]), withDirectives(createBaseVNode(`div`, $t, [l2[7] || (l2[7] = createBaseVNode(`hr`, null, null, -1)), createBaseVNode(`h4`, null, toDisplayString(q2.value.preview) + `:`, 1), createBaseVNode(`div`, { class: `wl-content`, innerHTML: Se2.value }, null, 8, en)], 512), [[vShow, V2.value]]), createBaseVNode(`div`, tn, [createBaseVNode(`div`, nn, [createBaseVNode(`a`, rn, [createVNode(unref(St))]), withDirectives(createBaseVNode(`button`, { ref: `emoji-button`, type: `button`, class: normalizeClass([`wl-action`, { active: R2.value }]), title: q2.value.emoji, onClick: l2[1] || (l2[1] = (e) => R2.value = !R2.value) }, [createVNode(unref(vt))], 10, an), [[vShow, L.value.tabs.length]]), unref(y).search ? (openBlock(), createElementBlock(`button`, { key: 0, ref: `gif-button`, type: `button`, class: normalizeClass([`wl-action`, { active: B2.value }]), title: q2.value.gif, onClick: l2[2] || (l2[2] = (e) => B2.value = !B2.value) }, [createVNode(unref(Ot))], 10, on)) : createCommentVNode(`v-if`, true), createBaseVNode(`input`, { id: `wl-image-upload`, ref: `image-uploader`, class: `upload`, "aria-hidden": `true`, type: `file`, accept: `.png,.jpg,.jpeg,.webp,.bmp,.gif`, onChange: De2 }, null, 544), Y2.value ? (openBlock(), createElementBlock(`label`, { key: 1, for: `wl-image-upload`, class: `wl-action`, title: q2.value.uploadImage, "aria-label": q2.value.uploadImage }, [createVNode(unref(yt))], 8, sn)) : createCommentVNode(`v-if`, true), createBaseVNode(`button`, { type: `button`, class: normalizeClass([`wl-action`, { active: V2.value }]), title: q2.value.preview, onClick: l2[3] || (l2[3] = (e) => V2.value = !V2.value) }, [createVNode(unref(xt))], 10, cn)]), createBaseVNode(`div`, ln, [l2[9] || (l2[9] = createBaseVNode(`div`, { class: `wl-captcha-container` }, null, -1)), createBaseVNode(`div`, un, [createTextVNode(toDisplayString(H2.value) + ` `, 1), unref(y).wordLimit ? (openBlock(), createElementBlock(`span`, dn, [l2[8] || (l2[8] = createTextVNode(`  /  `, -1)), createBaseVNode(`span`, { class: normalizeClass({ illegal: !G2.value }), textContent: toDisplayString(W2.value) }, null, 10, fn)])) : createCommentVNode(`v-if`, true), createTextVNode(`  ` + toDisplayString(q2.value.word), 1)]), unref(y).login !== `disable` && !J2.value ? (openBlock(), createElementBlock(`button`, { key: 0, type: `button`, class: `wl-btn`, onClick: Ae2, textContent: toDisplayString(q2.value.login) }, null, 8, pn)) : createCommentVNode(`v-if`, true), unref(y).login !== `force` || J2.value ? (openBlock(), createElementBlock(`button`, { key: 1, type: `submit`, class: `primary wl-btn`, title: `Cmd|Ctrl + Enter`, disabled: K2.value, onClick: Oe2 }, [K2.value ? (openBlock(), createBlock(unref(Dt), { key: 0, size: 16 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(q2.value.submit), 1)], 64))], 8, mn)) : createCommentVNode(`v-if`, true)]), createBaseVNode(`div`, { ref: `gif-popup`, class: normalizeClass([`wl-gif-popup`, { display: B2.value }]) }, [createBaseVNode(`input`, { ref: `gif-search`, type: `text`, placeholder: q2.value.gifSearchPlaceholder, onInput: l2[4] || (l2[4] = (...e) => unref(Pe2) && unref(Pe2)(...e)) }, null, 40, hn), U2.list.length ? (openBlock(), createBlock(Ht, { key: 0, items: U2.list, "column-width": 200, gap: 6, onInsert: l2[5] || (l2[5] = (e) => X2(e)), onScroll: Q2 }, null, 8, [`items`])) : createCommentVNode(`v-if`, true), U2.loading ? (openBlock(), createElementBlock(`div`, gn, [createVNode(unref(Dt), { size: 30 })])) : createCommentVNode(`v-if`, true)], 2), createBaseVNode(`div`, { ref: `emoji-popup`, class: normalizeClass([`wl-emoji-popup`, { display: R2.value }]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(L.value.tabs, (t2, n) => (openBlock(), createElementBlock(Fragment, { key: t2.name }, [n === me2.value ? (openBlock(), createElementBlock(`div`, { key: 0, class: `wl-tab-wrapper`, onScroll: xe2 }, [(openBlock(true), createElementBlock(Fragment, null, renderList(t2.items, (e) => (openBlock(), createElementBlock(`button`, { key: e, type: `button`, title: e, onClick: (t3) => X2(`:${e}:`), onMouseenter: (t3) => ye2(t3, e), onMouseleave: xe2 }, [R2.value ? (openBlock(), createElementBlock(`img`, { key: 0, class: `wl-emoji`, src: L.value.map[e], alt: e, loading: `lazy`, referrerPolicy: `no-referrer` }, null, 8, vn)) : createCommentVNode(`v-if`, true)], 40, _n))), 128))], 32)) : createCommentVNode(`v-if`, true)], 64))), 128)), createBaseVNode(`div`, null, [z2.value ? (openBlock(), createElementBlock(`img`, { key: 0, class: `wl-emoji-preview`, src: L.value.map[z2.value], alt: `preview`, loading: `lazy`, referrerPolicy: `no-referrer`, style: normalizeStyle(he2.value) }, null, 12, yn)) : createCommentVNode(`v-if`, true)]), L.value.tabs.length > 1 ? (openBlock(), createElementBlock(`div`, bn, [(openBlock(true), createElementBlock(Fragment, null, renderList(L.value.tabs, (e, t2) => (openBlock(), createElementBlock(`button`, { key: e.name, type: `button`, class: normalizeClass([`wl-tab`, { active: me2.value === t2 }]), onClick: (e2) => me2.value = t2 }, [createBaseVNode(`img`, { class: `wl-emoji`, src: e.icon, alt: e.name, title: e.name, loading: `lazy`, referrerPolicy: `no-referrer` }, null, 8, Sn)], 10, xn))), 128))])) : createCommentVNode(`v-if`, true)], 2)])]), c2.replyId || ((_b = c2.edit) == null ? void 0 : _b.objectId) ? (openBlock(), createElementBlock(`button`, { key: 1, type: `button`, class: `wl-close`, title: q2.value.cancelReply, onClick: l2[6] || (l2[6] = (e) => c2.replyId ? _(`cancelReply`) : _(`cancelEdit`)) }, [createVNode(unref(gt), { size: 24 })], 8, Cn)) : createCommentVNode(`v-if`, true)]);
  };
} });
var Tn = [`id`];
var En = { class: `wl-user`, "aria-hidden": `true` };
var Dn = [`src`];
var On = { class: `wl-card` };
var kn = { class: `wl-head` };
var An = [`href`];
var jn = { key: 1, class: `wl-nick` };
var Mn = [`textContent`];
var Nn = [`textContent`];
var Pn = [`textContent`];
var Fn = [`textContent`];
var In = { class: `wl-comment-actions` };
var Ln = [`title`, `href`];
var Rn = [`title`];
var zn = [`title`];
var Bn = { class: `wl-meta`, "aria-hidden": `true` };
var Vn = [`data-value`, `textContent`];
var Hn = { key: 0, class: `wl-warning`, "aria-hidden": `true` };
var Un = { key: 1, class: `wl-content` };
var Wn = { key: 0, class: `wl-reply-to` };
var Gn = [`href`];
var Kn = [`innerHTML`];
var qn = { key: 2, class: `wl-admin-actions` };
var Jn = { class: `wl-comment-status` };
var Yn = [`disabled`, `onClick`, `textContent`];
var Xn = { key: 4, class: `wl-quote` };
var Zn = defineComponent({ __name: `CommentCard`, props: { comment: {}, edit: {}, rootId: {}, reply: {} }, emits: [`log`, `submit`, `delete`, `like`, `sticky`, `edit`, `reply`, `status`], setup(c2, { emit: l }) {
  let d2 = l, f = [`approved`, `waiting`, `spam`], m = inject(Re), h2 = R(), g = useNow(), _ = be(), y = computed(() => m.value.locale), b = computed(() => {
    let { link: e } = c2.comment;
    return e ? Ve(e) ? e : `https://${e}` : ``;
  }), x = computed(() => h2.value.includes(c2.comment.objectId)), E = computed(() => Xe(new Date(c2.comment.time), g.value, y.value)), D = computed(() => _.value.type === `administrator`), O = computed(() => c2.comment.user_id && _.value.objectId === c2.comment.user_id), k = computed(() => {
    var _a;
    return c2.comment.objectId === ((_a = c2.reply) == null ? void 0 : _a.objectId);
  }), A = computed(() => {
    var _a;
    return c2.comment.objectId === ((_a = c2.edit) == null ? void 0 : _a.objectId);
  });
  return (t, l2) => {
    var _a;
    let u = resolveComponent(`CommentCard`, true);
    return openBlock(), createElementBlock(`div`, { id: c2.comment.objectId.toString(), class: `wl-card-item` }, [createBaseVNode(`div`, En, [c2.comment.avatar ? (openBlock(), createElementBlock(`img`, { key: 0, class: `wl-user-avatar`, src: c2.comment.avatar, alt: `` }, null, 8, Dn)) : createCommentVNode(`v-if`, true), c2.comment.type === `guest` ? (openBlock(), createBlock(unref(Tt), { key: 1 })) : createCommentVNode(`v-if`, true), c2.comment.type === `administrator` ? (openBlock(), createBlock(unref(Et), { key: 2 })) : createCommentVNode(`v-if`, true)]), createBaseVNode(`div`, On, [createBaseVNode(`div`, kn, [b.value ? (openBlock(), createElementBlock(`a`, { key: 0, class: `wl-nick`, href: b.value, target: `_blank`, rel: `ugc nofollow noreferrer noopener` }, toDisplayString(c2.comment.nick), 9, An)) : (openBlock(), createElementBlock(`span`, jn, toDisplayString(c2.comment.nick), 1)), c2.comment.label ? (openBlock(), createElementBlock(`span`, { key: 2, class: `wl-badge`, textContent: toDisplayString(c2.comment.label) }, null, 8, Mn)) : createCommentVNode(`v-if`, true), c2.comment.sticky ? (openBlock(), createElementBlock(`span`, { key: 3, class: `wl-badge`, textContent: toDisplayString(y.value.sticky) }, null, 8, Nn)) : createCommentVNode(`v-if`, true), typeof c2.comment.level == `number` ? (openBlock(), createElementBlock(`span`, { key: 4, class: normalizeClass(`wl-badge level${c2.comment.level}`), textContent: toDisplayString(y.value[`level${c2.comment.level}`] || `Level ${c2.comment.level}`) }, null, 10, Pn)) : createCommentVNode(`v-if`, true), createBaseVNode(`span`, { class: `wl-time`, textContent: toDisplayString(E.value) }, null, 8, Fn), createBaseVNode(`div`, In, [D.value || O.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode(`button`, { type: `button`, class: `wl-edit`, onClick: l2[0] || (l2[0] = (e) => d2(`edit`, c2.comment)) }, [createVNode(unref(wt))]), createBaseVNode(`button`, { type: `button`, class: `wl-delete`, onClick: l2[1] || (l2[1] = (e) => d2(`delete`, c2.comment)) }, [createVNode(unref(_t))])], 64)) : createCommentVNode(`v-if`, true), O.value && !unref(m).noRss ? (openBlock(), createElementBlock(`a`, { key: 1, role: `button`, class: `wl-rss`, title: y.value.subscribeToReplies, href: `${unref(m).serverURL}/api/comment/rss?user_id=${c2.comment.user_id}`, target: `_blank`, rel: `noopener noreferrer` }, [createVNode(unref(At))], 8, Ln)) : createCommentVNode(`v-if`, true), createBaseVNode(`button`, { type: `button`, class: `wl-like`, title: x.value ? y.value.cancelLike : y.value.like, onClick: l2[2] || (l2[2] = (e) => d2(`like`, c2.comment)) }, [createVNode(unref(bt), { active: x.value }, null, 8, [`active`]), createTextVNode(` ` + toDisplayString(`like` in c2.comment ? c2.comment.like : ``), 1)], 8, Rn), createBaseVNode(`button`, { type: `button`, class: normalizeClass([`wl-reply`, { active: k.value }]), title: k.value ? y.value.cancelReply : y.value.reply, onClick: l2[3] || (l2[3] = (e) => d2(`reply`, k.value ? null : c2.comment)) }, [createVNode(unref(Ct))], 10, zn)])]), createBaseVNode(`div`, Bn, [(openBlock(), createElementBlock(Fragment, null, renderList([`addr`, `browser`, `os`], (t2) => (openBlock(), createElementBlock(Fragment, null, [c2.comment[t2] ? (openBlock(), createElementBlock(`span`, { key: t2, class: normalizeClass(`wl-${t2}`), "data-value": c2.comment[t2], textContent: toDisplayString(c2.comment[t2]) }, null, 10, Vn)) : createCommentVNode(`v-if`, true)], 64))), 64))]), c2.comment.status === `waiting` && !D.value ? (openBlock(), createElementBlock(`div`, Hn, toDisplayString(y.value.commentUnderReview), 1)) : createCommentVNode(`v-if`, true), A.value ? createCommentVNode(`v-if`, true) : (openBlock(), createElementBlock(`div`, Un, [`reply_user` in c2.comment && c2.comment.reply_user ? (openBlock(), createElementBlock(`p`, Wn, [createBaseVNode(`a`, { href: `#` + c2.comment.pid }, `@` + toDisplayString(c2.comment.reply_user.nick), 9, Gn), l2[17] || (l2[17] = createBaseVNode(`span`, null, `: `, -1))])) : createCommentVNode(`v-if`, true), createBaseVNode(`div`, { innerHTML: c2.comment.comment }, null, 8, Kn)])), D.value && !A.value ? (openBlock(), createElementBlock(`div`, qn, [createBaseVNode(`span`, Jn, [(openBlock(), createElementBlock(Fragment, null, renderList(f, (e) => createBaseVNode(`button`, { key: e, type: `submit`, class: normalizeClass(`wl-btn wl-${e}`), disabled: c2.comment.status === e, onClick: (t2) => d2(`status`, { status: e, comment: c2.comment }), textContent: toDisplayString(y.value[e]) }, null, 10, Yn)), 64))]), D.value && !(`rid` in c2.comment) ? (openBlock(), createElementBlock(`button`, { key: 0, type: `submit`, class: `wl-btn wl-sticky`, onClick: l2[4] || (l2[4] = (e) => d2(`sticky`, c2.comment)) }, toDisplayString(c2.comment.sticky ? y.value.unsticky : y.value.sticky), 1)) : createCommentVNode(`v-if`, true)])) : createCommentVNode(`v-if`, true), k.value || A.value ? (openBlock(), createElementBlock(`div`, { key: 3, class: normalizeClass({ "wl-reply-wrapper": k.value, "wl-edit-wrapper": A.value }) }, [createVNode(wn, { edit: c2.edit, "reply-id": (_a = c2.reply) == null ? void 0 : _a.objectId, "reply-user": c2.comment.nick, "root-id": c2.rootId, onLog: l2[5] || (l2[5] = (e) => d2(`log`)), onCancelReply: l2[6] || (l2[6] = (e) => d2(`reply`, null)), onCancelEdit: l2[7] || (l2[7] = (e) => d2(`edit`, null)), onSubmit: l2[8] || (l2[8] = (e) => d2(`submit`, e)) }, null, 8, [`edit`, `reply-id`, `reply-user`, `root-id`])], 2)) : createCommentVNode(`v-if`, true), `children` in c2.comment ? (openBlock(), createElementBlock(`div`, Xn, [(openBlock(true), createElementBlock(Fragment, null, renderList(c2.comment.children, (e) => (openBlock(), createBlock(u, { key: e.objectId, comment: e, reply: c2.reply, edit: c2.edit, "root-id": c2.rootId, onLog: l2[9] || (l2[9] = (e2) => d2(`log`)), onDelete: l2[10] || (l2[10] = (e2) => d2(`delete`, e2)), onEdit: l2[11] || (l2[11] = (e2) => d2(`edit`, e2)), onLike: l2[12] || (l2[12] = (e2) => d2(`like`, e2)), onReply: l2[13] || (l2[13] = (e2) => d2(`reply`, e2)), onStatus: l2[14] || (l2[14] = (e2) => d2(`status`, e2)), onSticky: l2[15] || (l2[15] = (e2) => d2(`sticky`, e2)), onSubmit: l2[16] || (l2[16] = (e2) => d2(`submit`, e2)) }, null, 8, [`comment`, `reply`, `edit`, `root-id`]))), 128))])) : createCommentVNode(`v-if`, true)])], 8, Tn);
  };
} });
var Qn = { "data-waline": `` };
var $n = { class: `wl-meta-head` };
var er = { class: `wl-count` };
var tr = [`textContent`];
var nr = { class: `wl-sort` };
var rr = [`onClick`];
var ir = { class: `wl-cards` };
var ar = { key: 1, class: `wl-operation` };
var or = [`textContent`];
var sr = { key: 2, class: `wl-loading` };
var cr = [`textContent`];
var lr = { key: 4, class: `wl-operation` };
var ur = [`textContent`];
var dr = { key: 5, class: `wl-meta-foot` };
var fr = { key: 0, class: `wl-rss` };
var pr = [`href`, `alt`];
var mr = [`textContent`];
var hr = [`href`, `alt`];
var gr = [`textContent`];
var _r = { key: 1, class: `wl-power` };
var vr = defineComponent({ __name: `WalineComment`, props: { serverURL: {}, path: {}, meta: {}, requiredMeta: {}, wordLimit: {}, pageSize: {}, lang: {}, locale: {}, commentSorting: {}, dark: { type: [String, Boolean] }, login: {}, noCopyright: { type: Boolean }, noRss: { type: Boolean }, recaptchaV3Key: {}, turnstileKey: {}, reaction: { type: [Array, Boolean] }, emoji: {}, search: { type: [Object, Boolean] }, highlighter: { type: Function }, imageUploader: { type: Function }, texRenderer: { type: Function } }, setup(c2) {
  let l = c2, u = be(), d2 = R(), f = ref(`loading`), m = ref(0), h2 = ref(1), b = ref(0), C = computed(() => We(l)), E = ref(C.value.commentSorting), D = ref([]), O = ref(null), k = ref(null), A = computed(() => qe(C.value.dark)), j = computed(() => C.value.locale);
  useStyleTag(A, { id: `waline-darkmode` });
  let ee = null, te = (e) => {
    let { serverURL: t, path: n, pageSize: r2 } = C.value, i2 = new AbortController();
    f.value = `loading`, ee == null ? void 0 : ee(), a({ serverURL: t, lang: C.value.lang, path: n, pageSize: r2, sortBy: Ie[E.value], page: e, signal: i2.signal, token: u.value.token }).then((t2) => {
      f.value = `success`, m.value = t2.count, D.value.push(...t2.data), h2.value = e, b.value = t2.totalPages;
    }).catch((e2) => {
      e2.name !== `AbortError` && (console.error(e2.message), f.value = `error`);
    }), ee = i2.abort.bind(i2);
  }, M = () => {
    te(h2.value + 1);
  }, N = () => {
    m.value = 0, D.value = [], te(1);
  }, P = (e) => {
    E.value !== e && (E.value = e, N());
  }, re = (e) => {
    O.value = e;
  }, ae = (e) => {
    k.value = e;
  }, se = (e) => {
    if (k.value) k.value.comment = e.comment, k.value.orig = e.orig;
    else if (`rid` in e) {
      let t = D.value.find(({ objectId: t2 }) => t2 === e.rid);
      if (!t) return;
      Array.isArray(t.children) || (t.children = []), t.children.push(e);
    } else D.value.unshift(e), m.value += 1;
  }, ce = async ({ comment: e, status: t }) => {
    if (e.status === t) return;
    let { serverURL: n, lang: r2 } = C.value;
    await c({ serverURL: n, lang: r2, token: u.value.token, objectId: e.objectId, comment: { status: t } }), e.status = t;
  }, ue2 = async (e) => {
    if (`rid` in e) return;
    let { serverURL: t, lang: n } = C.value;
    await c({ serverURL: t, lang: n, token: u.value.token, objectId: e.objectId, comment: { sticky: +!e.sticky } }), e.sticky = !e.sticky;
  }, I = async ({ objectId: e }) => {
    if (!confirm(`Are you sure you want to delete this comment?`)) return;
    let { serverURL: t, lang: n } = C.value;
    await s({ serverURL: t, lang: n, token: u.value.token, objectId: e }), D.value.some((t2, n2) => t2.objectId === e ? (D.value = D.value.filter((e2, t3) => t3 !== n2), true) : t2.children.some((r2, i2) => r2.objectId === e ? (D.value[n2].children = t2.children.filter((e2, t3) => t3 !== i2), true) : false));
  }, L = async (e) => {
    let { serverURL: t, lang: n } = C.value, { objectId: r2 } = e, i2 = d2.value.includes(r2);
    await c({ serverURL: t, lang: n, objectId: r2, token: u.value.token, comment: { like: !i2 } }), i2 ? d2.value = d2.value.filter((e2) => e2 !== r2) : (d2.value = [...d2.value, r2], d2.value.length > 50 && (d2.value = d2.value.slice(-50))), e.like = Math.max(0, (e.like || 0) + (i2 ? -1 : 1));
  };
  return provide(Re, C), onMounted(async () => {
    var _a;
    watchImmediate(() => [l.serverURL, l.path], () => {
      N();
    });
    let e = new URLSearchParams(location.search).get(`token`);
    if (!e) return;
    let t = await fetch(`${C == null ? void 0 : C.value.serverURL}/token`, { headers: { Authorization: `Bearer ${e}` } }).then((e2) => e2.json()).catch((e2) => (console.error(e2), {}));
    !t.errno && ((_a = t == null ? void 0 : t.data) == null ? void 0 : _a.objectId) && (u.value = { ...t.data, token: e });
    let n = new URL(window.location.href);
    n.searchParams.delete(`token`), history.replaceState(null, ``, n.pathname + (n.searchParams.toString() ? `?${n.searchParams.toString()}` : ``) + n.hash);
  }), onUnmounted(() => {
    ee == null ? void 0 : ee();
  }), (t, c3) => (openBlock(), createElementBlock(`div`, Qn, [createVNode(zt), !O.value && !k.value ? (openBlock(), createBlock(wn, { key: 0, onLog: N, onSubmit: se })) : createCommentVNode(`v-if`, true), createBaseVNode(`div`, $n, [createBaseVNode(`div`, er, [m.value ? (openBlock(), createElementBlock(`span`, { key: 0, class: `wl-num`, textContent: toDisplayString(m.value) }, null, 8, tr)) : createCommentVNode(`v-if`, true), createTextVNode(` ` + toDisplayString(j.value.comment), 1)]), createBaseVNode(`ul`, nr, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(Le), (e) => (openBlock(), createElementBlock(`li`, { key: e, class: normalizeClass([e === E.value ? `active` : ``]), onClick: (t2) => P(e) }, toDisplayString(j.value[e]), 11, rr))), 128))])]), createBaseVNode(`div`, ir, [(openBlock(true), createElementBlock(Fragment, null, renderList(D.value, (e) => (openBlock(), createBlock(Zn, { key: e.objectId, "root-id": e.objectId, comment: e, reply: O.value, edit: k.value, onLog: N, onReply: re, onEdit: ae, onSubmit: se, onStatus: ce, onDelete: I, onSticky: ue2, onLike: L }, null, 8, [`root-id`, `comment`, `reply`, `edit`]))), 128))]), f.value === `error` ? (openBlock(), createElementBlock(`div`, ar, [createBaseVNode(`button`, { type: `button`, class: `wl-btn`, onClick: N, textContent: toDisplayString(j.value.refresh) }, null, 8, or)])) : f.value === `loading` ? (openBlock(), createElementBlock(`div`, sr, [createVNode(unref(Dt), { size: 30 })])) : D.value.length ? h2.value < b.value ? (openBlock(), createElementBlock(`div`, lr, [createBaseVNode(`button`, { type: `button`, class: `wl-btn`, onClick: M, textContent: toDisplayString(j.value.more) }, null, 8, ur)])) : createCommentVNode(`v-if`, true) : (openBlock(), createElementBlock(`div`, { key: 3, class: `wl-empty`, textContent: toDisplayString(j.value.sofa) }, null, 8, cr)), D.value.length || f.value !== `loading` ? (openBlock(), createElementBlock(`div`, dr, [C.value.noRss ? createCommentVNode(`v-if`, true) : (openBlock(), createElementBlock(`div`, fr, [createBaseVNode(`a`, { href: `${C.value.serverURL}/api/comment/rss?path=${encodeURIComponent(C.value.path)}`, target: `_blank`, rel: `noopener noreferrer`, alt: j.value.subPostComment }, [createVNode(unref(kt)), createBaseVNode(`span`, { textContent: toDisplayString(j.value.subPostComment) }, null, 8, mr)], 8, pr), createBaseVNode(`a`, { href: `${C.value.serverURL}/api/comment/rss`, target: `_blank`, rel: `noopener noreferrer`, alt: j.value.subSiteComment }, [createVNode(unref(kt)), createBaseVNode(`span`, { textContent: toDisplayString(j.value.subSiteComment) }, null, 8, gr)], 8, hr)])), C.value.noCopyright ? createCommentVNode(`v-if`, true) : (openBlock(), createElementBlock(`div`, _r, [c3[0] || (c3[0] = createTextVNode(` Powered by `, -1)), c3[1] || (c3[1] = createBaseVNode(`a`, { href: `https://github.com/walinejs/waline`, target: `_blank`, rel: `noopener noreferrer` }, ` Waline `, -1)), createTextVNode(` v` + toDisplayString(unref(ht)), 1)]))])) : createCommentVNode(`v-if`, true)]));
} });
export {
  vr as Waline,
  ht as version
};
//# sourceMappingURL=@waline_client_component.js.map
