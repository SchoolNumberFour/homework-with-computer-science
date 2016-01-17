<form enctype="multipart/form-data" method="post" id="feedback-form">
<label for="nameFF">Имя:</label>
<input type="text" name="nameFF" id="nameFF" required placeholder="например, Владимир Грабко" x-autocompletetype="name" class="w100 border">
<label for="contactFF">Класс</label>
<input type="text" name="contactFF" id="contactFF" required placeholder="например, 11-А" x-autocompletetype="email" class="w100 border">
<label for="fileFF">Прикрепить файл:</label>
<input type="file" name="fileFF[]" multiple id="fileFF" class="w100">
<label for="messageFF">Сообщение:</label>
<textarea name="messageFF" id="messageFF" required rows="5" placeholder="Описание" class="w100 border"></textarea>
<br>
<input value="Отправить" type="submit" id="submitFF">
<div id="load"></div>
</form>