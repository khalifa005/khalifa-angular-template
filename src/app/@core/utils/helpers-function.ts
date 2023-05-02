export function convertToFormData<T>( formValue: T ) {
  const formData = new FormData();

  for ( const key of Object.keys(formValue) ) {
    const value = formValue[key];
    formData.append(key, value);
  }

  return formData;
}

export function onFileUploadValidationType(eventOrInput: HTMLInputEvent | HTMLInputElement, acceptedExtensions: string[], showWarning: boolean = false): boolean {

  const target = (eventOrInput instanceof HTMLInputElement ? eventOrInput as HTMLInputElement : (eventOrInput as any).target as HTMLInputElement);

  if (!target)
    return false;

  const files = target.files as FileList;

  // no files attached, so no need to validate the extensions
  if (files.length == 0)
    return true;

  // no extensions passed, so no need to validate the extensions
  if (!acceptedExtensions || acceptedExtensions.length == 0)
    return true;

  const fileNameParts = files[0].name.split('.');
  const fileExtension = fileNameParts[fileNameParts.length - 1].toLocaleLowerCase();
  const fileType = files[0].type.toLocaleLowerCase();

  for (const acceptedExtension of acceptedExtensions) {

    if (
      fileExtension === acceptedExtension.toLocaleLowerCase()
      ||
      fileType.startsWith(acceptedExtension.toLowerCase())
    )
      return true;
  }

  if (showWarning) {
    this.ShowWarning("يجب أن يكون الملف المرفق من ضمن الأنواع التالية:\r\n" + this.replaceAll(acceptedExtensions.toString(), ",", ", "));
  }

  this.HtmlSetFocus(target);

  return false;

}

export function onFileUploadValidationSize(event: HTMLInputEvent, size: number): boolean {
  if (event.target.files.length > 0) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    if (files[0].size < size)
      return true;

  }
  return false;
}

export function calculatedFileSizeInKB(sizeInMegaByte: number): number {

  const KBTMB : number = 1048576;

  return sizeInMegaByte * KBTMB;

}

export interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
